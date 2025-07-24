'use client';

import { useEffect } from 'react';

export default function BackgroundOverlay() {
    useEffect(() => {
        const overlay = document.getElementById('overlay');

        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            if (overlay) {
                overlay.style.maskImage = `radial-gradient(circle 100px at ${x}px ${y}px, transparent 0%, black 120px)`;
                overlay.style.webkitMaskImage = `radial-gradient(circle 100px at ${x}px ${y}px, transparent 0%, black 120px)`;
            }
        };

        const handleMouseLeave = () => {
            if (overlay) {
                overlay.style.maskImage = `radial-gradient(circle 0px at -200px -200px, transparent 0%, black 1px)`;
                overlay.style.webkitMaskImage = `radial-gradient(circle 0px at -200px -200px, transparent 0%, black 1px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 w-screen h-screen overflow-hidden">
            {/* Color Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/imgs/honeycombs.png')" }}
            />

            {/* Grayscale Overlay */}
            <div
                id="overlay"
                className="absolute inset-0 bg-cover bg-center pointer-events-none transition-all duration-100"
                style={{
                    backgroundImage: "url('/imgs/honeycombs.png')",
                    WebkitMaskImage: "radial-gradient(circle 100px at 0 0, transparent 0%, black 120px)",
                    maskImage: "radial-gradient(circle 100px at 0 0, transparent 0%, black 120px)",
                    filter: 'grayscale(100%) brightness(0) opacity(1)',
                }}
            />
        </div>
    );
}
