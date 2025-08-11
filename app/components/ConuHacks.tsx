'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { CircleChevronLeftIcon, CircleChevronRightIcon } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube } from 'react-icons/fa';

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
        youtube?: string;
    }[];
    tag?: string;
    others?: Record<string, string>;
    devpost?: string;
};

const slides: Slide[] = [
    // 1) ConUHacks overview
    {
        id: 1,
        image: '/imgs/conuhacks/conu.jpg',
        title: 'ConUHacks - The hackathon experience',
        subtitle:
            'A student-run, 24-hour hackathon that champions learning-by-building. ConUHacks brings together developers, designers, and curious minds to prototype, learn from mentors, and launch ideas — growing each year in scale, community, and ambition.',
        stats: undefined,
        tag: 'Hackathon',
        others: {
            Date: '24th January 2026',
            Location: 'Concordia University, Montreal',
            Duration: '24 hours',
            Theme: 'Innovation and Collaboration',
            Registration: 'Opening soon',
            Website: 'https://conuhacks.io',
        },
    },

    // ConUHacks IX – The Next Frontier (2025)
    {
        id: 2,
        image: '/imgs/conuhacks/conu9.jpg',
        title: 'ConUHacks IX - The Next Frontier (2025)',
        subtitle:
            'The ninth edition (Feb 1–2, 2025) attracted ~800 participants—the largest yet—and boasted 143 project submissions, heightened mentorship, and dedicated hands-on hardware spaces to elevate innovation.',
        stats: { Participants: '850+', Projects: '143+', Mentors: '100+', Sponsors: '50+' },
        winners: [
            {
                position: '1',
                team: 'PrezPal',
                project: 'PrezPal',
                description: 'A voice controlled custom slides editor, powered by generative AI. Create your presentation deck hands-free, with our in-house slides editor.',
                devpostlink: 'https://devpost.com/software/prezpal-36079w',
                youtube: "https://youtu.be/yamqvno6T1g"
            },
            {
                position: '2',
                team: 'LeetWrite',
                project: 'LeetWrite',
                description: 'LeetCode, but you explain code instead of writing code.',
                devpostlink: 'https://devpost.com/software/leetwrite',
                youtube: "https://youtu.be/CKVScKptAec"
            },
            {
                position: '3',
                team: '404 Lost & Found',
                project: '404 Lost & Found',
                description: 'Ever lost something precious and wished you had a digital detective on your side? Meet 404 Lost&Found – your AI-powered personal item finder and data visualization tool.',
                devpostlink: 'https://devpost.com/software/404-lost-found',
                youtube: "https://youtu.be/BHq4QkTe6PE"
            }
        ],
        tag: 'Ninth Edition',
        devpost: "https://conuhacks-ix.devpost.com/"
    },

    // ConUHacks VIII – Uncharted Territories (2024)
    {
        id: 3,
        image: '/imgs/conuhacks/conu8.jpg',
        title: 'ConUHacks VIII - Uncharted Territories (2024)',
        subtitle:
            '2024 celebrated exploration into areas like civic tech, sustainability, and hardware-first prototypes, with stronger community buzz and interdisciplinary collaboration.',
        stats: { Participants: '800+', Projects: '400+', Mentors: '90+', Sponsors: '40+' },
        winners: [
            {
                position: '1',
                team: 'Spartan',
                project: 'Spartan',
                description: 'Do you have trouble waking up in the morning? Do you press snooze one too many times?If so, this productivity tool is for you, it will eliminate all laziness and lost time in your morning routine.',
                devpostlink: 'https://devpost.com/software/spartan',
                youtube: "https://youtu.be/nfhIwxx5KrE"
            },
            {
                position: '2',
                team: 'MotiSpectra',
                project: 'MotiSpectra',
                description: 'Measure Emotion, Power Connections.',
                devpostlink: 'https://devpost.com/software/motispectra',
                youtube: "https://youtu.be/yr4MhT2WnGA"
            },
            {
                position: '3',
                team: 'Avada Kedavra',
                project: 'Avada Kedavra',
                description: 'Avada Kedavra! Join our hand-controlled wizard in his fight against endless enemies!',
                devpostlink: 'https://devpost.com/software/avada-kedavra',
            }
        ],
        tag: 'Eighth Edition',
    },

    // ConUHacks VII – Breaking Boundaries (2023)
    {
        id: 4,
        image: '/imgs/conuhacks/conu7.jpg',
        title: 'ConUHacks VII - Breaking Boundaries (2023)',
        subtitle:
            'After virtual editions during the pandemic, ConUHacks returned in-person Jan 21–22 2023 with 523 participants on Devpost but ~800 attendees overall—reigniting energy through workshops, mentors, tours, and connection.',
        stats: { Participants: '750+', Projects: '350+', Mentors: '80+', Sponsors: '35+' },
        winners: [
            {
                position: '1',
                team: 'NearbyNow',
                project: 'NearbyNow',
                description: 'NearbyNow is a service that detects storefronts and provides useful information such as opening hours, website, menu, reviews, etc. using a live camera feed.',
                devpostlink: 'https://devpost.com/software/nearbynow',
            },
            {
                position: '2',
                team: 'Jane',
                project: 'Jane',
                description: 'Revolutionize your job interview prep with our app. Simulate real-life behavioral & technical interviews in natural conversation for personalized practice. Land your dream job.',
                devpostlink: 'https://devpost.com/software/jane-9jka4i',
            },
            {
                position: '3',
                team: 'MeLody',
                project: 'MeLody',
                description: 'An elegant AI that generates a chord progression/bassline based on a user-input melody.',
                devpostlink: 'https://devpost.com/software/mlody',
            }
        ],
        tag: 'Seventh Edition',
    },

    // ConUHacks VI – Innovation Unleashed (2022)
    {
        id: 5,
        image: '/imgs/conuhacks/conu6.jpg',
        title: 'ConUHacks VI - Innovation Unleashed (2022)',
        subtitle:
            '2022 leaned into rapid prototyping and experimentation: teams embraced ML/AI and maker-hardware, reinforcing the hackathon’s reputation as a space for shipping bold MVPs quickly.',
        stats: { Participants: '750+', Projects: '300+', Mentors: '70+', Sponsors: '30+' },
        winners: [
            {
                position: '1',
                team: 'RevYou',
                project: 'RevYou',
                description: 'Are you tired of written online reviews? Introducing RevYou, an application that allows you to not only post entertaining videos attached to locations, but also post video reviews.',
                devpostlink: 'https://devpost.com/software/revyou',
            },
            {
                position: '2',
                team: "Four O' Four",
                project: "Four O' Four",
                description: 'Access the web via SMS - even without internet!',
                devpostlink: 'https://devpost.com/software/four-o-four',
                youtube: "https://youtu.be/UrS1tbuyW8Y"
            },
            {
                position: '3',
                team: 'Furnishare',
                project: 'Furnishare',
                description: 'Decreasing furniture, clothing, and electronic waste one item at a time.',
                devpostlink: 'https://devpost.com/software/furnishare',
                youtube: "https://youtu.be/nycW-l9_gDg"
            }
        ],
        tag: 'Sixth Edition',
    },

    // ConUHacks V – A New Era (2020)
    {
        id: 6,
        image: '/imgs/conuhacks/conu5.jpg',
        title: 'ConUHacks V - A New Era (2020)',
        subtitle:
            '2020 drew 700+ participants, massive application numbers, and 49 sponsors, signaling a shift toward startup thinking—helping teams envision projects beyond the 24-hour sprint.',
        stats: { Participants: '700+', Projects: '250+', Mentors: '60+', Sponsors: '49+' },
        winners: [
            {
                position: '1',
                team: 'BookLens',
                project: 'BookLens',
                description: 'The new gen LeapFrog: An interactive learning tool designed for reading texts aloud and translation.',
                devpostlink: 'https://devpost.com/software/booklens',
            },
            {
                position: '2',
                team: "LIFEtrainer",
                project: "LIFEtrainer",
                description: 'Home of the Heart Hero! This is an online education platform for a modern work environment leveraging IoT, hardware, AI and gamification.',
                devpostlink: 'https://devpost.com/software/lifetrainer'
            },
            {
                position: '3',
                team: 'TowAR',
                project: 'TowAR',
                description: 'AR tower defence game using the ARcore framework and Unity Engine.',
                devpostlink: 'https://devpost.com/software/bit-wizards-7u1sl4'
            }
        ],
        tag: 'Fifth Edition',
    },

    // ConUHacks IV – The Future Awaits (2019)
    {
        id: 7,
        image: '/imgs/conuhacks/conu4.jpg',
        title: 'ConUHacks IV - The Future Awaits (2019)',
        subtitle:
            'The 2019 edition welcomed ~700 students and over $20K–$25K in prizes. Projects tackled real-world needs—including accessibility-focused hacks—marking maturation in mentoring and project impact.',
        stats: { Participants: '700+', Projects: '180+', Mentors: '45+', Sponsors: '18+' },
        winners: [
            {
                position: '1',
                team: 'HEAR',
                project: 'HEAR',
                description: 'Generating Subtitles for Life.',
                devpostlink: 'https://devpost.com/software/hear-generating-subtitles-for-life',
                youtube: "https://youtu.be/vE7q2J6y1Fg"
            },
            {
                position: '2',
                team: "Sustainable IOT Fridge",
                project: "Sustainable IOT Fridge",
                description: 'Keep track of your food items and receive recipe recommendations to reduce food waste based on expiration dates.',
                devpostlink: 'https://devpost.com/software/virtual-fridge-yt7gc4'
            },
            {
                position: '3',
                team: 'SmarTrash',
                project: 'SmarTrash',
                description: 'What if your waste bin sorts it out for you?',
                devpostlink: 'https://devpost.com/software/smartrash'
            }
        ],
        tag: 'Fourth Edition',
    },

    // ConUHacks III – The Evolution Continues (2018)
    {
        id: 8,
        image: '/imgs/conuhacks/conu3.jpg',
        title: 'ConUHacks III - The Evolution Continues (2018)',
        subtitle:
            '2018 brought higher participation, increased sponsor involvement, and a growing prize pool—marking a refinement phase where polished presentations and improved mentorship became more common.',
        stats: { Participants: '600+', Projects: '150+', Mentors: '40+', Sponsors: '15+' },
        winners: [
            {
                position: '1',
                team: 'Alice',
                project: 'Alice',
                description: 'Alice aims to empower elderly people that currently suffer dementia and wish to utilize online banking.',
                devpostlink: 'https://devpost.com/software/alice-8kyna4',
            },
            {
                position: '2',
                team: "Senior Sensor",
                project: "Senior Sensor",
                description: 'Letting you know your loved ones are safe, wherever you are.',
                devpostlink: 'https://devpost.com/software/elderly-notifications',
                youtube: "https://youtu.be/E5A0DZAkQT0"
            },
            {
                position: '3',
                team: 'Chaperone',
                project: 'Chaperone',
                description: 'A web app dashboard helping elders with their reminders on the Amazon Echo.',
                devpostlink: 'https://devpost.com/software/chaperone'
            }
        ],
        tag: 'Third Edition',
    },

    // ConUHacks II – The Next Chapter (2017)
    {
        id: 9,
        image: '/imgs/conuhacks/conu2.jpg',
        title: 'ConUHacks II - The Next Chapter (2017)',
        subtitle:
            'With ConUHacks II, the community expanded—more teams, broader institutional support, and a growing diversity of participants signaled the hackathon finding its stride.',
        stats: { Participants: '400+', Projects: '120+', Mentors: '35+', Sponsors: '14+' },
        winners: [
            {
                position: '1',
                team: 'InstantPi',
                project: 'InstantPi',
                description: 'Watchdog - Concordia University Hackathon.',
                devpostlink: 'https://devpost.com/software/conuhacks',
            },
            {
                position: '2',
                team: "Foody",
                project: "Foody",
                description: 'Foody food finder <3',
                devpostlink: 'https://devpost.com/software/foody-lfbvrn'
            },
            {
                position: '3',
                team: 'L2Talk',
                project: 'L2Talk',
                description: 'Improve your speech with this app.',
                devpostlink: 'https://devpost.com/software/l2talk'
            }
        ],
        tag: 'Second Edition',
    },

    // ConUHacks I – A Journey Begins (2016)
    {
        id: 10,
        image: '/imgs/conuhacks/conu1.jpg',
        title: 'ConUHacks I - A Journey Begins (2016)',
        subtitle:
            'The inaugural MLH-affiliated ConUHacks in Jan 2016 brought 250+ students together for a 24-hour buildathon—planting the community roots and traditions that fueled the hackathon’s growth over the next decade.',
        stats: { Participants: '250+', Projects: '100+', Mentors: '30+', Sponsors: '10+' },
        winners: [
            {
                position: '1',
                team: 'DOUBLEVISION',
                project: 'DOUBLEVISION',
                description: 'Accompaniyig your videos with smart context so you can further research topics mentioned in your video.',
                devpostlink: 'https://devpost.com/software/doublevision',
                youtube: "https://youtu.be/kKdxBxN9THQ"
            },
            {
                position: '2',
                team: "SignSpeaks",
                project: "SignSpeaks",
                description: 'A wireless and cost effective solution using an Android app and a Myo for ASL to speech translation (bilingual).',
                devpostlink: 'https://devpost.com/software/signspeaks'
            },
            {
                position: '3',
                team: 'ProViralPictures.net',
                project: 'ProViralPictures.net',
                description: 'Instantly add filters to your Facebook profile picture to support charities and local events.',
                devpostlink: 'https://devpost.com/software/proviralpictures-net'
            }
        ],
        tag: 'First Edition',
    },
];


export default function ConuHacks() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

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
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [active]);

    const goToPrev = () => {
        setDirection(-1);
        setActive((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setDirection(1);
        setActive((prev) => (prev + 1) % slides.length);
    };

    // Animation variants for sliding
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "relative",
            width: "100%",
            height: "100%",
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
        }),
    };

    return (
        <section
            className="relative md:h-screen w-full overflow-hidden p-5 max-w-7xl mx-auto"
            id="conuhacks"
        >
            {/* Background image with slide animation */}
            <div className="absolute inset-0 z-0 md:my-20 md:mr-10 max-w-7xl overflow-hidden rounded-sm shadow-amber-100 min-h-[70vh]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={active}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={activeSlide.image}
                            alt={activeSlide.title}
                            fill
                            style={{ objectFit: "cover" }}
                            className="md:rounded-sm"
                            priority
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/80" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 md:h-full w-full flex md:px-4 lg:px-10 md:py-25 mx-auto max-w-7xl min-h-[70vh]">
                <div className="text-white">
                    <h1
                        className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-1"
                        style={{ marginLeft: "-2px" }}
                    >
                        {activeSlide.title}
                    </h1>
                    <p
                        className="text-xs md:text-sm max-w-5xl mb-5"
                        dangerouslySetInnerHTML={{ __html: activeSlide.subtitle }}
                    ></p>
                    {activeSlide.stats && (
                        <div
                            className="grid grid-cols-4 gap-4 text-sm max-w-sm"
                            style={{ marginTop: "0px" }}
                        >
                            {Object.entries(activeSlide.stats).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <span className="text-lg md:text-2xl font-semibold">
                                        {value}
                                    </span>
                                    <span className="text-xs opacity-70">{key}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeSlide.winners && activeSlide.winners.length > 0 && (
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">Winners:</h2>
                            <ul className="list-none space-y-1">
                                {activeSlide.winners.map((winner, index) => (
                                    <li key={index} className="text-xs md:text-sm mt-1 mb-5">
                                        <div className="text-sm flex gap-1 text-yellow-300 font-semibold">
                                            <span>{winner.position}.</span>
                                            <a
                                                href={winner.devpostlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <p className="hover:text-yellow-500">{winner.project}</p>
                                            </a>
                                        </div>
                                        {winner.description && (
                                            <span
                                                className="block text-xs text-white max-w-xl mt-1"
                                                style={{ lineHeight: "18px" }}
                                            >
                                                {winner.description}
                                            </span>
                                        )}
                                        {winner.youtube && (
                                            <a
                                                href={winner.youtube}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex gap-1 items-center text-xs mt-2 text-gray-200"
                                            >
                                                <FaYoutube className="w-4 h-4 text-red-500" />
                                                <span className="hover:text-red-400 font-semibold">
                                                    Watch demo
                                                </span>
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeSlide.others &&
                        Object.entries(activeSlide.others).length > 0 && (
                            <div className="mt-6">
                                <ul className="list-none">
                                    {Object.entries(activeSlide.others).map(([key, value]) => (
                                        <li key={key} className="text-xs md:text-sm my-2">
                                            <span className="text-yellow-400">{key}</span>: {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                </div>
            </div>

            <div className="relative bottom-0 md:absolute md:bottom-70 md:right-10 z-20 flex items-center space-x-4 mt-4 justify-center">
                <div className="flex items-center space-x-1">
                    <button
                        onClick={goToPrev}
                        className="text-white hover:text-yellow-400 p-2 rounded-full bg-white/10 backdrop-blur-sm"
                    >
                        <CircleChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="text-white hover:text-yellow-400 p-2 rounded-full bg-white/10 backdrop-blur-sm"
                    >
                        <CircleChevronRightIcon className="w-6 h-6" />
                    </button>
                </div>
                {/* Progress Bar (under thumbnails) */}
                <div className="z-20 w-[200px] md:w-[320px] h-1 bg-white/20 overflow-hidden">
                    <div
                        className="md:h-full bg-yellow-400 transition-all duration-300"
                        style={{ width: `${((active + 1) * 100) / slides.length}%` }}
                    />
                </div>
                <div className="pr-3">
                    <span className="text-white text-sm flex font-semibold">
                        {active + 1 < 10 && <span>0</span>} {active + 1}
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
                                'min-w-[180px] rounded-lg border p-2 transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20',
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
                                style={{ objectFit: 'cover' }}
                                className="rounded-md h-[160px]"
                            />
                            <div className="text-white mt-2">
                                <div className="text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">{slide.title}</div>
                                <div className="text-xs text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap">{slide.subtitle}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
