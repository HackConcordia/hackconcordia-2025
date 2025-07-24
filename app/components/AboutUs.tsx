// components/AboutUs.tsx

'use client';

import Image from 'next/image';

export default function AboutUs() {
    return (
        <>
            <section className="relative z-10 w-screen h-screen flex items-center justify-center px-6 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl items-center">
                    {/* Left: Text */}
                    <div className="text-white space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                            HackConcordia
                        </h1>

                        <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400">
                            Bee the Change. Code the Future.
                        </h2>

                        <p className="text-lg text-white/80">
                            Bringing Quebec’s biggest hackathon to life.
                        </p>

                        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg transition">
                            ConUHacks
                        </button>
                    </div>

                    {/* Right: Image */}
                    {/* Right: Image */}
                    <div className="flex justify-center animate-pulse duration-700 ">
                        <Image
                            src="/imgs/biglogo.png"
                            alt="Hackathon illustration"
                            width={300}
                            height={300}
                            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
                            priority
                        />
                    </div>

                </div>
            </section>
            <section className="relative w-screen h-screen z-10 py-20 px-6 lg:px-16 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Left: Images */}
                    <div className="flex-1 flex justify-center items-center relative h-[400px] w-full">
                        <div className="absolute top-0 left-0 rotate-[-6deg]">
                            <Image
                                src="/imgs/about_us1.jpg"
                                alt="HackConcordia team"
                                width={160}
                                height={160}
                                className="rounded-xl shadow-lg" />
                        </div>
                        <div className="absolute top-[100px] left-[100px] rotate-[8deg] z-10">
                            <Image
                                src="/imgs/about_us2.jpg"
                                alt="Workshop"
                                width={180}
                                height={180}
                                className="rounded-xl shadow-lg" />
                        </div>
                        <div className="absolute top-[200px] left-[40px] rotate-[-3deg]">
                            <Image
                                src="/imgs/about_us3.jpg"
                                alt="Hackathon group"
                                width={160}
                                height={160}
                                className="rounded-xl shadow-lg" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">
                            Inside the Hive
                        </h2>

                        <ul className="space-y-4 text-white/90 text-lg leading-relaxed list-disc list-inside">
                            <li>
                                <strong>Meet the buzzing minds</strong> building Quebec’s biggest student hackathon. HackConcordia is a student-led tech community at Concordia University, where curious creators come together to learn, build, and innovate through code.
                            </li>
                            <li>
                                <strong>This is your hub</strong> for all things hacking. From upcoming hackathons and events to curated learning resources, this site is your launchpad to grow your skills, meet fellow builders, and bring your ideas to life.
                            </li>
                            <li>
                                <strong>Ready to dive in?</strong> Whether you want to compete in a hackathon, attend a workshop, or just meet some like-minded tech lovers, HackConcordia has a spot for you. Come be part of the hive where learning, building, and having fun happen every day.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="relative w-screen h-screen z-10 px-8 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left: Text Content */}
                    <div className='mb-8'>
                        <h3 className="text-2xl font-bold text-white mb-4">ConUHacks</h3>
                        <p className="text-sm text-gray-300 mb-6">
                            We believe the best way to learn is by building. ConUHacks is designed to ignite innovation through collaboration. In just one day, teams turn ideas into working prototypes, gaining hands-on experience and building meaningful connections along the way. It’s not just about winning — it’s about exploration, resilience, and growth.
                        </p>
                        <h3 className="text-2xl font-semibold text-white mb-2">Our Mission</h3>
                        <p className="text-sm text-gray-300">
                            Every January, hundreds of students gather in downtown Montreal for 24 hours of creativity, coding, and caffeine. ConUHacks is Concordia’s flagship hackathon — a student-run tech event where developers, designers, and dreamers team up to solve real-world challenges. From first-time hackers to seasoned coders, everyone is welcome.
                        </p>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <Image
                            src="/imgs/about_us1.jpg"
                            width={200}
                            height={100}
                            alt="Hackathon 1"
                            className="col-span-1 row-span-1 w-full h-48 object-cover rounded-lg" />
                        <Image
                            src="/imgs/about_us2.jpg"
                            width={200}
                            height={100}
                            alt="Hackathon 2"
                            className="col-span-1 row-span-1 w-full h-48 object-cover rounded-lg" />
                        <Image
                            src="/imgs/about_us3.jpg"
                            width={300}
                            height={200}
                            alt="Hackathon 3"
                            className="col-span-2 row-span-1 w-full h-48 object-cover rounded-lg" />
                    </div>
                </div>
            </section>
        </>

    );
}
