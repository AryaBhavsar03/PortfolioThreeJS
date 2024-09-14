import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import Star from './Star';

const Stars = () => {
    const [stars, setStars] = useState([]);
    const [glowingStars, setGlowingStars] = useState([]);
    const groupRef = useRef();
    const { camera } = useThree();

    useEffect(() => {
        const createStars = () => {
            const newStars = [];
            for (let i = 0; i < 1500; i++) {
                const distance = Math.random() * 2000 + 1000;
                const theta = Math.random() * 2 * Math.PI;
                const phi = Math.acos((Math.random() * 2) - 1);
                const x = distance * Math.sin(phi) * Math.cos(theta);
                const y = distance * Math.sin(phi) * Math.sin(theta);
                const z = distance * Math.cos(phi);
                const size = Math.random() * 1 + 0.5;
                const glow = Math.random() * 2 + 0.5;
                newStars.push({ position: [x, y, z], size, glow, rotation: [0, 0, 0] });
            }
            setStars(newStars);
        };

        createStars();
    }, []);

    useFrame((state, delta) => {
        setStars((prevStars) =>
            prevStars.map((star) => {
                const [x, y, z] = star.position;
                const newZ = z + delta * 20;
                const newRotation = [
                    star.rotation[0] + delta * Math.random() * 0.1,
                    star.rotation[1] + delta * Math.random() * 0.1,
                    star.rotation[2] + delta * Math.random() * 0.1,
                ];

                if (newZ > 0) {
                    const distance = Math.random() * 2000 + 100;
                    const theta = Math.random() * 2 * Math.PI;
                    const phi = Math.acos((Math.random() * 2) - 1);
                    const newX = distance * Math.sin(phi) * Math.cos(theta);
                    const newY = distance * Math.sin(phi) * Math.sin(theta);
                    return { position: [newX, newY, -distance], size: star.size, glow: star.glow, rotation: newRotation };
                }
                return { ...star, position: [x, y, newZ], rotation: newRotation };
            })
        );

        // Randomly make some stars glow more
        if (Math.random() < 0.01) {
            const randomIndex = Math.floor(Math.random() * stars.length);
            setGlowingStars((prev) => [...prev, randomIndex]);
            setTimeout(() => {
                setGlowingStars((prev) => prev.filter((index) => index !== randomIndex));
            }, 1000);
        }
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { innerWidth, innerHeight } = window;
            const x = (event.clientX / innerWidth) * 2 - 1;
            const y = -(event.clientY / innerHeight) * 2 + 1;
            const z = (event.clientY / innerHeight) * 50;
            camera.position.x = x * 50;
            camera.position.y = y * 50;
            camera.position.z = z;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [camera]);

    return (
        <group ref={groupRef}>
            {stars.map((star, index) => (
                <Star
                    key={index}
                    position={star.position}
                    size={star.size}
                    glow={glowingStars.includes(index) ? star.glow * 2 : star.glow}
                    rotation={star.rotation}
                />
            ))}
        </group>
    );
};

export default Stars;