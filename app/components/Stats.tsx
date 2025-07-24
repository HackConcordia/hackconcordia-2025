'use client';

import Image from "next/image";

export default function Stats() {
    const images = [
        '/imgs/about_us1.jpg',
        '/imgs/about_us1.jpg',
        '/imgs/about_us1.jpg',
        '/imgs/about_us1.jpg',
        '/imgs/about_us1.jpg',
        '/imgs/about_us1.jpg',
        '/imgs/about_us1.jpg',
    ];

    return (
        <section className="w-screen h-screen text-white py-20 px-6">
            <h2 className="text-3xl font-bold mb-12 text-yellow-400">Honeycomb of stats</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-6xl mx-auto">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="w-60 h-60 bg-gray-700 clip-hexagon overflow-hidden shadow-md"
                    >
                        <Image
                            src={src}
                            alt={`Hex image ${index + 1}`}
                            className="w-full h-full object-cover"
                            width={160}
                            height={160}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
