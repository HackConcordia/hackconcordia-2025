// components/AboutUs.tsx

'use client';

import Lottie from "lottie-react";
import scrollAnimation from "../../public/animations/scroll_down_animation.json";
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <section className="relative z-10 h-[calc(100vh-140px)] max-w-7xl mx-auto" id="home">
                <div className="flex items-center justify-center h-full w-full">
                    {/* Container with image background */}
                    <div className="relative w-full max-w-4xl flex items-center justify-center">

                        {/* Overlay Text */}
                        <div className="inset-0 flex flex-col items-center justify-center text-center text-white px-4 space-y-6 z-30">

                            <h1 className={`logo xl:text-8xl md:ml-2 sm:text-5xl md:text-7xl text-5xl font-ruda text-neon-yellow mb-2`}>
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
                            <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg backdrop-blur-xs border-2 border-white/10 rounded-l-sm rounded-r-sm mb-10">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 placeholder-gray-500 text-white"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 transition w-full sm:w-auto cursor-pointer rounded-r-sm"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <div className="absolute flex flex-col text-white items-center space-y-2 z-10" style={{ marginBottom: '-600px' }}>
                                <Lottie animationData={scrollAnimation} className="w-15 md:w-16" />
                                <span className="text-xs">Scroll down to know more</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Cards */}
                <div className="absolute top-0 left-1/3 p-1 space-y-4 z-10 max-w-sm">
                    <div className="relative group overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg rotate-[-7deg] backdrop-blur-xs bg-white/5">

                        {/* Glow Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span className="text-xs relative z-10">
                            This is your hub for all things hacking. From upcoming hackathons and events to curated learning resources, this site is your launchpad to grow your skills, meet fellow builders, and bring your ideas to life.
                        </span>
                    </div>
                </div>


                <div className="absolute bottom-20 right-0 p-2 space-y-4 z-10 max-w-sm">
                    {/* Mid Right Text Card */}
                    <div className="relative group overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg rotate-[27deg] backdrop-blur-xs bg-white/5">

                        {/* Glow Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span className="text-xs relative z-10">
                            Ready to dive in? Whether you want to compete in a hackathon, attend a workshop, or just meet some like-minded tech lovers, HackConcordia has a spot for you. Come be part of the hive where learning, building, and having fun happen every day.
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-5 left-0 space-y-4 z-10 max-w-sm pb-12">
                    {/* Bottom Left Text Card */}
                    <div className="relative group overflow-hidden border-2 border-white/10 p-4 rounded-lg text-white shadow-lg rotate-[-27deg] backdrop-blur-xs bg-white/5">

                        {/* Glow Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <span className="text-xs relative z-10">
                            Meet the buzzing minds building Quebec’s biggest student hackathon. HackConcordia is a student-led tech community at Concordia University, where curious creators come together to learn, build, and innovate through code.
                        </span>
                    </div>
                </div>

                {/* Images with random rotation */}
                <div className="absolute top-15 right-0 space-y-4 z-10 max-w-md">
                    <div
                        className="w-full h-[200px] rounded-md overflow-hidden shadow-lg rotate-[35deg] transition-transform duration-700 hover:scale-105"
                    >
                        <Image src="/imgs/about_us1.jpg" alt="image 1" className="object-cover w-full h-full" width={300} height={200} />
                    </div>
                </div>

                <div className="absolute top-10 left-0 space-y-4 z-10 max-w-md">
                    <div
                        className="w-full h-[200px] rounded-md overflow-hidden shadow-lg rotate-[-45deg] transition-transform duration-700 hover:scale-105"
                    >
                        <Image src="/imgs/about_us2.jpg" alt="image 2" className="object-cover w-full h-full" width={300} height={200} />
                    </div>
                </div>
            </section>
        </>

    );
}
