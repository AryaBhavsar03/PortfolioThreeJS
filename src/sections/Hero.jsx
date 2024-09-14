import React, { Suspense, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import Stars from '../components/Stars.jsx';

const Hero = () => {
    const cameraRef = useRef();

    useEffect(() => {
        var typed = new Typed('.typing', {
            strings: ['Love', 'Care', 'Passion'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="min-h-screen w-full flex flex-col relative">
            <div className="w-full h-full absolute inset-0 z-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 30]} />
                        <Stars />
                    </Suspense>
                </Canvas>
            </div>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am <span className="text-logo">Arya Bhavsar </span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Building the future with <span className="typing">Passion</span>
                </p>
            </div>
        </section>
    );
};

export default Hero;