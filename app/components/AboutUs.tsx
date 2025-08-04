'use client';

import Lottie from "lottie-react";
import scrollAnimation from "../../public/animations/scroll_down_animation.json";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutUs() {
    // Auto-scroll ref
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let scrollAmount = 0;
        const scrollSpeed = 1;

        const scrollLoop = () => {
            if (!container) return;
            scrollAmount += scrollSpeed;
            if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
            container.scrollLeft = scrollAmount;
            requestAnimationFrame(scrollLoop);
        };

        requestAnimationFrame(scrollLoop);
    }, []);

    const cardText = [
        `This is your hub for all things hacking. From upcoming hackathons and events to curated learning resources, this site is your launchpad to grow your skills, meet fellow builders, and bring your ideas to life.`,
        `Meet the buzzing minds building Quebec’s biggest student hackathon. HackConcordia is a student-led tech community at Concordia University.`,
        `Ready to dive in? Whether you want to compete in a hackathon, attend a workshop, or just meet some like-minded tech lovers, HackConcordia has a spot for you.`,
    ];

    return (
        <section className="relative z-10 h-[calc(100vh-140px)] max-w-7xl mx-auto" id="home">
            <div className="flex items-center justify-center h-full w-full">
                <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
                    <div className="inset-0 h-full flex flex-col items-center justify-center text-center text-white px-4 space-y-6 z-30 mt-16 md:mt-0">

                        <h1 className="logo xl:text-8xl md:ml-2 sm:text-5xl md:text-7xl text-5xl font-ruda text-neon-yellow mb-2">
                            <b className="w-1/2">
                                Hack<span>C</span>onc<span>ordi</span>a
                            </b>
                        </h1>

                        <h2 className="text-xl sm:text-2xl font-semibold mb-1">
                            Bee the Change. Code the Future.
                        </h2>

                        <p className="text-sm text-white/80 max-w-xl">
                            Bringing Quebec’s biggest hackathon to life.
                        </p>

                        {/* Subscribe Form */}
                        <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg backdrop-blur-xs md:border-2 md:border-white/10 rounded-l-sm md:rounded-r-sm md:mb-10">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 placeholder-gray-500 text-white outline-0 border-2 border-white/10 md:border-0"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 transition w-full sm:w-auto cursor-pointer md:rounded-r-sm"
                            >
                                Subscribe
                            </button>
                        </form>

                        {/* Mobile Auto-scroll Text Cards */}
                        <div className="flex flex-col gap-4 md:hidden w-full px-4 mt-6">
                            {cardText.map((text, idx) => (
                                <div
                                    key={idx}
                                    className="w-full border-2 border-white/10 text-white text-xs p-4 rounded-lg backdrop-blur-xs bg-white/5 shadow-md whitespace-normal break-words"
                                >
                                    {text}
                                </div>
                            ))}
                        </div>


                        {/* Scroll Down Lottie */}
                        <div className="absolute hidden md:flex flex-col text-white items-center space-y-2 z-10" style={{ marginBottom: '-600px' }}>
                            <Lottie animationData={scrollAnimation} className="w-15 md:w-16" />
                            <span className="text-xs">Scroll down to know more</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Only Elements */}
            <div className="hidden md:block absolute top-0 left-1/3 p-1 mt-4 space-y-4 z-10 max-w-sm">
                <div className="relative group overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg rotate-[-7deg] backdrop-blur-xs bg-white/5">
                    <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4" />
                    <span className="text-xs relative z-10">{cardText[0]}</span>
                </div>
            </div>

            <div className="hidden md:block absolute bottom-20 right-2 p-2 space-y-4 z-10 max-w-sm">
                <div className="relative group overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg rotate-[27deg] backdrop-blur-xs bg-white/5">
                    <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4" />
                    <span className="text-xs relative z-10">{cardText[1]}</span>
                </div>
            </div>

            <div className="hidden md:block absolute bottom-5 left-5 space-y-4 z-10 max-w-sm pb-12">
                <div className="relative group overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg rotate-[-27deg] backdrop-blur-xs bg-white/5">
                    <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-xs relative z-10">{cardText[2]}</span>
                </div>
            </div>

            {/* Rotated images (desktop only) */}
            <div className="hidden md:block absolute top-15 right-5 space-y-4 z-10 max-w-md">
                <div className="w-full h-[200px] rounded-md overflow-hidden shadow-lg rotate-[35deg] transition-transform duration-700 hover:scale-105">
                    <Image src="/imgs/about_us1.jpg" alt="image 1" className="object-cover w-full h-full" width={300} height={200} />
                </div>
            </div>

            <div className="hidden md:block absolute top-10 left-8 space-y-4 z-10 max-w-md">
                <div className="w-full h-[200px] rounded-md overflow-hidden shadow-lg rotate-[-45deg] transition-transform duration-700 hover:scale-105">
                    <Image src="/imgs/about_us2.jpg" alt="image 2" className="object-cover w-full h-full" width={300} height={200} />
                </div>
            </div>
        </section>
    );
}
