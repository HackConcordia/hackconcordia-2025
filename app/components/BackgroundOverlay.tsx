'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundOverlay() {
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const overlay = document.getElementById('overlay');
        let mouseX = 0;
        let mouseY = 0;

        const updateOverlay = () => {
            if (overlay) {
                overlay.style.maskImage = `radial-gradient(circle 100px at ${mouseX}px ${mouseY}px, transparent 0%, black 120px)`;
                overlay.style.webkitMaskImage = `radial-gradient(circle 100px at ${mouseX}px ${mouseY}px, transparent 0%, black 120px)`;
            }
            rafRef.current = null;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Throttle updates using requestAnimationFrame
            if (!rafRef.current) {
                rafRef.current = requestAnimationFrame(updateOverlay);
            }
        };

        const handleMouseLeave = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
            if (overlay) {
                overlay.style.maskImage = `radial-gradient(circle 0px at -200px -200px, transparent 0%, black 1px)`;
                overlay.style.webkitMaskImage = `radial-gradient(circle 0px at -200px -200px, transparent 0%, black 1px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
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
