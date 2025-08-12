'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { CircleChevronLeftIcon, CircleChevronRightIcon } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube } from 'react-icons/fa';
import { slides } from '../data/conuhacks.data';

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
            className="relative md:h-screen w-full overflow-hidden p-5 max-w-7xl mx-auto mt-16"
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
