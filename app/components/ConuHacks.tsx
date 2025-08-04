'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { CircleChevronLeftIcon, CircleChevronRightIcon } from 'lucide-react';

type Slide = {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    stats?: Record<string, string>;
    winners?: {
        position: string;
        team: string;
        project: string;
        description: string;
        devpostlink: string;
    }[];
    tag?: string;
    others?: Record<string, string>;
};

const slides: Slide[] = [
    {
        id: 1,
        image: '/imgs/about_us2.jpg',
        title: 'Conuhacks - The hackathon experience',
        subtitle: 'We believe the best way to learn is by building. ConUHacks is designed to ignite innovation through collaboration. In just one day, teams turn ideas into working prototypes, gaining hands-on experience and building meaningful connections along the way. It’s not just about winning — it’s about exploration, resilience, and growth. Every January, hundreds of students gather in downtown Montreal for 24 hours of creativity, coding, and caffeine. ConUHacks is Concordia’s flagship hackathon — a student-run tech event where developers, designers, and dreamers team up to solve real-world challenges. From first-time hackers to seasoned coders, everyone is welcome.',
        stats: {
            "Participants": "1000+",
            "Projects": "200+",
            "Mentors": "50+",
            "Sponsors": "20+",
        },
        tag: 'Hackathon',
        others: {
            "Date": "24th January 2026",
            "Location": "Concordia University, Montreal",
            "Duration": "24 hours",
            "Theme": "Innovation and Collaboration",
            "Registration": "Open Now",
            "Website": "https://conuhacks.com",
        }
    },
    {
        id: 2,
        image: '/imgs/about_us1.jpg',
        title: 'ConuHacks I - A Journey Begins ',
        subtitle: 'The first edition of ConuHacks marked the beginning of an incredible journey. With a focus on collaboration and innovation, participants were encouraged to think outside the box and push the boundaries of what was possible.',
        stats: {
            "Participants": "500+",
            "Projects": "100+",
            "Mentors": "30+",
            "Sponsors": "10+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'First Edition',
    },
    {
        id: 3,
        image: '/imgs/about_us3.jpg',
        title: 'Conuhacks II - The Next Chapter',
        subtitle: 'Building on the success of the first edition, ConuHacks II brought together an even larger community of innovators. With more participants and projects, the event showcased the incredible talent and creativity within the tech community.',
        stats: {
            "Participants": "700+",
            "Projects": "150+",
            "Mentors": "40+",
            "Sponsors": "15+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'Second Edition',
    },
    {
        id: 4,
        image: '/imgs/about_us3.jpg',
        title: 'Conuhacks III - The Evolution Continues',
        subtitle: 'The third edition of ConuHacks saw the event evolve into a major tech gathering. With a focus on mentorship and collaboration, participants were able to learn from industry experts and take their projects to new heights.',
        stats: {
            "Participants": "800+",
            "Projects": "180+",
            "Mentors": "45+",
            "Sponsors": "18+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'Third Edition',
    },
    {
        id: 5,
        image: '/imgs/about_us3.jpg',
        title: 'Conuhacks IV - The Future Awaits',
        subtitle: 'Shaping the future of technology through collaboration and innovation. ConuHacks IV focused on pushing the boundaries of what was possible, encouraging participants to think big and dream even bigger.',
        stats: {
            "Participants": "900+",
            "Projects": "200+",
            "Mentors": "50+",
            "Sponsors": "20+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'Fourth Edition',
    },
    {
        id: 6,
        image: '/imgs/about_us3.jpg',
        title: 'Conuhacks V - A New Era',
        subtitle: 'Shaping the future of technology through collaboration and innovation. ConuHacks V focused on pushing the boundaries of what was possible, encouraging participants to think big and dream even bigger.',
        stats: {
            "Participants": "1000+",
            "Projects": "250+",
            "Mentors": "60+",
            "Sponsors": "25+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'Fifth Edition',
    },
    {
        id: 7,
        image: '/imgs/about_us3.jpg',
        title: 'Conuhacks VI - Innovation Unleashed',
        subtitle: 'Celebrating the spirit of innovation and collaboration, Conuhacks VI pushes the boundaries of technology and creativity.',
        stats: {
            "Participants": "1200+",
            "Projects": "300+",
            "Mentors": "70+",
            "Sponsors": "30+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'Sixth Edition',
    },
    {
        id: 8,
        image: '/imgs/about_us3.jpg',
        title: 'Conuhacks VII - Breaking Boundaries',
        subtitle: 'Celebrating the spirit of innovation and collaboration, Conuhacks VII pushes the boundaries of technology and creativity.',
        stats: {
            "Participants": "1500+",
            "Projects": "350+",
            "Mentors": "80+",
            "Sponsors": "35+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'Seventh Edition',
    },
    {
        id: 9,
        image: '/imgs/about_us3.jpg',
        title: 'Conuhacks VIII - Uncharted Territories',
        subtitle: 'Celebrating the spirit of innovation and collaboration, Conuhacks VIII pushes the boundaries of technology and creativity.',
        stats: {
            "Participants": "1600+",
            "Projects": "400+",
            "Mentors": "90+",
            "Sponsors": "40+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'Eighth Edition',
    },
    {
        id: 10,
        image: '/imgs/about_us3.jpg',
        title: 'Conuhacks IX - The Next Frontier',
        subtitle: 'Celebrating the spirit of innovation and collaboration, Conuhacks IX pushes the boundaries of technology and creativity.',
        stats: {
            "Participants": "1800+",
            "Projects": "450+",
            "Mentors": "100+",
            "Sponsors": "50+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'Ninth Edition',
    },
    {
        id: 11,
        image: '/imgs/about_us3.jpg',
        title: 'Conuhacks X - A Decade of Innovation',
        subtitle: 'Celebrating 10 years of Conuhacks, we look back at a decade of innovation, collaboration, and community building. From humble beginnings to becoming one of the largest student hackathons in Quebec, Conuhacks has consistently pushed the boundaries of what’s possible in tech.',
        stats: {
            "Participants": "2000+",
            "Projects": "500+",
            "Mentors": "120+",
            "Sponsors": "60+",
        },
        winners: [{
            position: '1st Place',
            team: 'Team Alpha',
            project: 'Project X',
            description: 'An innovative solution that revolutionized the way we approach problem-solving in tech.',
            devpostlink: 'https://devpost.com/project-x',
        },
        {
            position: '2nd Place',
            team: 'Team Beta',
            project: 'Project Y',
            description: 'A groundbreaking project that introduced new methodologies in software development.',
            devpostlink: 'https://devpost.com/project-y',
        },
        {
            position: '3rd Place',
            team: 'Team Gamma',
            project: 'Project Z',
            description: 'A creative approach to enhancing user experience through innovative design.',
            devpostlink: 'https://devpost.com/project-z',
        }],
        tag: 'Tenth Edition',
    },
];

export default function ConuHacks() {
    const [active, setActive] = useState(0);

    const activeSlide = slides[active];
    const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

    const hasMounted = useRef(false);

    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }

        if (thumbRefs.current[active]) {
            thumbRefs.current[active]?.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    }, [active]);




    const goToPrev = () => {
        setActive((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setActive((prev) => (prev + 1) % slides.length);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden p-5 max-w-7xl mx-auto" style={{ maxHeight: '100vh' }} id="conuhacks">
            {/* Background image */}
            <div className="absolute inset-0 z-0 my-20 md:mr-10 max-w-7xl">
                <Image
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-700 ease-in-out md:rounded-sm shadow-amber-100"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80" />
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 h-full w-full flex px-4 md:px-10 py-25 mx-auto max-w-7xl">
                <div className="text-white">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-1" style={{ marginLeft: '-2px' }}>
                        {activeSlide.title}
                    </h1>
                    <p className="text-xs max-w-5xl mb-5" dangerouslySetInnerHTML={{ __html: activeSlide.subtitle }}></p>
                    {
                        activeSlide.stats && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-sm" style={{ marginTop: '15px' }}>
                                {Object.entries(activeSlide.stats).map(([key, value]) => (
                                    <div key={key} className="flex flex-col">
                                        <span className="text-2xl font-semibold">{value}</span>
                                        <span className="text-xs opacity-70">{key}</span>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                    {
                        activeSlide.winners && activeSlide.winners.length > 0 && (
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold">Winners:</h2>
                                <ul className="list-none space-y-2">
                                    {activeSlide.winners.map((winner, index) => (
                                        <li key={index} className="text-sm mt-3 mb-5">
                                            <strong>{winner.position}</strong>
                                            <a href={winner.devpostlink} target="_blank" rel="noopener noreferrer">
                                                <p className='hover:text-yellow-400'>{winner.team}: {winner.project}</p>
                                            </a>
                                            {winner.description && <span className="block text-xs opacity-70">{winner.description}</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                    {
                        activeSlide.others && Object.entries(activeSlide.others).length > 0 && (
                            <div className="mt-6">
                                <ul className="list-none">
                                    {Object.entries(activeSlide.others).map(([key, value]) => (
                                        <li key={key} className="text-sm my-2">
                                            <span className='text-yellow-400'>{key}</span>: {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="relative bottom-10 md:absolute md:bottom-70 md:right-10 z-20 flex items-center space-x-4">
                <div className='flex items-center space-x-1'>
                    <button
                        onClick={goToPrev}
                        className="text-white hover:text-yellow-400 p-2 rounded-full bg-white/10 backdrop-blur-sm cursor-pointer"
                    >
                        <CircleChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="text-white hover:text-yellow-400 p-2 rounded-full bg-white/10 backdrop-blur-sm cursor-pointer"
                    >
                        <CircleChevronRightIcon className="w-6 h-6" />
                    </button>
                </div>
                {/* Progress Bar (under thumbnails) */}
                <div className="z-20 w-[200px] md:w-[300px] h-1 bg-white/20 overflow-hidden">
                    <div
                        className="h-full bg-yellow-400 transition-all duration-300"
                        style={{ width: `${(active + 1) * (100 / slides.length)}%` }}
                    />
                </div>
                <div className='pr-3'>
                    <span className="text-white text-sm">
                        {active + 1} / {slides.length}
                    </span>
                </div>
            </div>

            {/* Carousel */}
            <div className="hidden md:block absolute bottom-10 right-0 z-20">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide" style={{ maxWidth: '500px' }}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            ref={(el) => { thumbRefs.current[index] = el; }}
                            className={clsx(
                                'min-w-[180px] cursor-pointer rounded-lg border p-2 transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20',
                                {
                                    'border-yellow-400': index === active,
                                }
                            )}
                            onClick={() => setActive(index)}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                width={160}
                                height={100}
                                className="rounded-md object-cover h-[160px]"
                            />
                            <div className="text-white mt-2">
                                <div className="text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">{slide.title}</div>
                                <div className="text-xs opacity-70 text-ellipsis overflow-hidden whitespace-nowrap">{slide.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
