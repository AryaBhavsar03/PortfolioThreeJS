import React, { useState, useMemo } from 'react';
import { Shape, ExtrudeGeometry } from 'three';

const Star = ({ position, size, glow }) => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const starShape = useMemo(() => {
        const shape = new Shape();
        const outerRadius = size;
        const innerRadius = size / 2;
        const spikes = 5;
        const step = Math.PI / spikes;

        for (let i = 0; i < 2 * spikes; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = Math.cos(i * step) * radius;
            const y = Math.sin(i * step) * radius;
            if (i === 0) {
                shape.moveTo(x, y);
            } else {
                shape.lineTo(x, y);
            }
        }
        shape.closePath();
        return shape;
    }, [size]);

    const starGeometry = useMemo(() => new ExtrudeGeometry(starShape, { depth: size / 4, bevelEnabled: false }), [starShape, size]);

    return (
        <mesh
            position={position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => setClicked(!clicked)}
        >
            <primitive object={starGeometry} />
            <meshBasicMaterial color={hovered ? 'yellow' : clicked ? 'red' : 'white'} />
            <pointLight intensity={glow} distance={size * 20} />
        </mesh>
    );
};

export default Star;