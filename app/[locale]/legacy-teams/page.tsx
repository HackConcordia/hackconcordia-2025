<<<<<<< HEAD:app/[locale]/legacy-teams/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import BeeCursor from "@/components/FloatingBeeCursor";
=======
'use client';

import React from 'react';
>>>>>>> origin:app/legacy-teams/page.tsx

type SubteamMember = {
  name: string;
  url?: string;
};

type Subteam = {
  name: string;
  members: SubteamMember[];
};

type TimelinePanel = {
  number: number;
  year: number;
  bgImage: string;
  subteams: Subteam[];
};

const timelineData: TimelinePanel[] = [
  {
<<<<<<< HEAD:app/[locale]/legacy-teams/page.tsx
    year: "2023",
    title: "HackConcordia 2023",
    image:
      "https://www.hackconcordia.io/_next/static/media/IMG_5319.507b4de7.jpg?imwidth=3840",
  },
  {
    year: "2022",
    title: "HackConcordia 2022",
    image:
      "https://www.hackconcordia.io/_next/static/media/IMG_5319.507b4de7.jpg?imwidth=3840",
  },
  {
    year: "2021",
    title: "HackConcordia 2021",
    image:
      "https://www.hackconcordia.io/_next/static/media/IMG_5319.507b4de7.jpg?imwidth=3840",
  },
];

export default function TimelineTrail() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // Set which items are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => refs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, []);

  // Update line fill height based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
      );
      setLineHeight(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
=======
    number: 9,
    year: 2024,
    bgImage: 'imgs/about_us3.jpg',
    subteams: [
      { name: 'Co-pres', members: [{ name: 'Alice', url: 'https://example.com/alice' }] },
      { name: 'Tech', members: [{ name: 'Bob' }, { name: 'Charlie', url: 'https://github.com/charlie' }] },
      { name: 'Marketing', members: [{ name: 'Diana' }] },
      { name: 'Internal', members: [{ name: 'Evan' }] },
      { name: 'Events', members: [{ name: 'Fiona' }] },
      { name: 'Sponsorship', members: [{ name: 'George' }] },
      { name: 'Logistics', members: [{ name: 'Hannah' }] },
      { name: 'Finance', members: [{ name: 'Ian' }] },
    ],
  },
  {
    number: 8,
    year: 2023,
    bgImage: 'imgs/about_us2.jpg',
    subteams: [
      { name: 'Co-pres', members: [{ name: 'Alice', url: 'https://example.com/alice' }] },
      { name: 'Tech', members: [{ name: 'Bob' }, { name: 'Charlie', url: 'https://github.com/charlie' }] },
      { name: 'Marketing', members: [{ name: 'Diana' }] },
      { name: 'Internal', members: [{ name: 'Evan' }] },
      { name: 'Events', members: [{ name: 'Fiona' }] },
      { name: 'Sponsorship', members: [{ name: 'George' }] },
      { name: 'Logistics', members: [{ name: 'Hannah' }] },
      { name: 'Finance', members: [{ name: 'Ian' }] },
    ],
  },
  {
    number: 7,
    year: 2022,
    bgImage: 'imgs/about_us1.jpg',
    subteams: [
      { name: 'Co-pres', members: [{ name: 'Bertin', url: 'https://example.com/alice' }, { name: 'Elizabeth', url: 'https://example.com/alice' }] },
      { name: 'Tech', members: [{ name: 'Bob' }, { name: 'Charlie', url: 'https://github.com/charlie' }] },
      { name: 'Marketing', members: [{ name: 'Diana' }] },
      { name: 'Internal', members: [{ name: 'Evan' }] },
      { name: 'Events', members: [{ name: 'Fiona' }] },
      { name: 'Sponsorship', members: [{ name: 'George' }] },
      { name: 'Logistics', members: [{ name: 'Hannah' }] },
      { name: 'Finance', members: [{ name: 'Ian' }] },
    ],
  },
  {
    number: 6,
    year: 2021,
    bgImage: 'imgs/about_us2.jpg',
    subteams: [
      { name: 'Co-pres', members: [{ name: 'Alice', url: 'https://example.com/alice' }] },
      { name: 'Tech', members: [{ name: 'Bob' }, { name: 'Charlie', url: 'https://github.com/charlie' }] },
      { name: 'Marketing', members: [{ name: 'Diana' }] },
      { name: 'Internal', members: [{ name: 'Evan' }] },
      { name: 'Events', members: [{ name: 'Fiona' }] },
      { name: 'Sponsorship', members: [{ name: 'George' }] },
      { name: 'Logistics', members: [{ name: 'Hannah' }] },
      { name: 'Finance', members: [{ name: 'Ian' }] },
    ],
  },
  {
    number: 5,
    year: 2020,
    bgImage: 'imgs/about_us3.jpg',
    subteams: [
      { name: 'Co-pres', members: [{ name: 'Alice', url: 'https://example.com/alice' }] },
      { name: 'Tech', members: [{ name: 'Bob' }, { name: 'Charlie', url: 'https://github.com/charlie' }] },
      { name: 'Marketing', members: [{ name: 'Diana' }] },
      { name: 'Internal', members: [{ name: 'Evan' }] },
      { name: 'Events', members: [{ name: 'Fiona' }] },
      { name: 'Sponsorship', members: [{ name: 'George' }] },
      { name: 'Logistics', members: [{ name: 'Hannah' }] },
      { name: 'Finance', members: [{ name: 'Ian' }] },
    ],
  },
  // Add other years similarly...
];
>>>>>>> origin:app/legacy-teams/page.tsx

const Timeline: React.FC = () => {
  return (
<<<<<<< HEAD:app/[locale]/legacy-teams/page.tsx
    <>
      <BeeCursor />
      <section
        id="timeline"
        className="w-full py-20 px-4 md:px-10 bg-black text-white"
      >
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            HackConcordia Legacy Teams
          </h2>
=======
    <div className="w-full overflow-x-auto overflow-y-hidden">
      <section
        id="timeline"
        className="flex h-[calc(87vh-5px)] snap-x snap-mandatory"
      >
        {timelineData.map(({ number, year, bgImage, subteams }) => (
          <div
            key={number}
            className="group relative flex-shrink-0 w-[30%] min-w-[300px] h-full text-white transition-all duration-500 ease-in-out hover:w-[70%] snap-start"
          >
            {/* Background Image */}
            <img
              className="absolute inset-0 w-full h-full object-cover transition duration-500 ease-in-out filter grayscale group-hover:grayscale-0"
              src={bgImage}
              alt={`Conuhacks ${number} Background`}
            />
>>>>>>> origin:app/legacy-teams/page.tsx

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 pointer-events-none"></div>

<<<<<<< HEAD:app/[locale]/legacy-teams/page.tsx
            <div className="pl-12 space-y-20">
              {timelineData.map((item, index) => {
                const isVisible = visibleIndexes.includes(index);
                return (
                  <div
                    key={item.year}
                    ref={(el) => {
                      refs.current[index] = el;
                    }}
                    data-index={index}
                    className={clsx(
                      "relative transition-all duration-700 ease-out",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    )}
                  >
                    {/* Glowing dot */}
                    {/* <div
                      className={clsx(
                        'absolute left-0 top-1 w-6 h-6 rounded-full border-4 z-10 transition-all duration-500',
                        isVisible
                          ? 'bg-yellow-400 border-black shadow-yellow-400 shadow-md scale-110'
                          : 'bg-gray-600 border-gray-800'
                      )}
                    /> */}

                    {/* Content box */}
                    <div className="shadow-md backdrop-blur-md">
                      <p className="text-sm text-gray-400">{item.title}</p>
                      <img
                        src={item.image}
                        alt={`${item.year} team`}
                        className={clsx(
                          "w-full mt-3 rounded-md transition-all duration-700",
                          isVisible
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        )}
                      />
                    </div>
                  </div>
                );
              })}
=======
            {/* Fullscreen Hover Content (Bottom Left Aligned) */}
            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 flex items-end">
              <div className="w-full p-6 overflow-y-auto max-h-full text-left backdrop-blur-sm">
                <h2 className="text-2xl font-bold uppercase text-yellow-400">
                  Conuhacks {number}
                </h2>
                <p className="text-lg font-semibold mb-4">{year} - {year - 1}</p>

                <div className="grid grid-cols-4 gap-x-6 gap-y-4">
                  {subteams.map((team) => (
                    <div key={team.name}>
                      <h3 className="font-semibold text-white">{team.name}</h3>
                      <ul className="list-disc list-inside text-sm">
                        {team.members.map((member) => (
                          <li key={member.name}>
                            {member.url ? (
                              <a
                                href={member.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-blue-400 transition-colors"
                              >
                                {member.name}
                              </a>
                            ) : (
                              member.name
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
>>>>>>> origin:app/legacy-teams/page.tsx
            </div>
          </div>
        ))}
      </section>
<<<<<<< HEAD:app/[locale]/legacy-teams/page.tsx
    </>
  );
}
=======
    </div>
  );
};

export default Timeline;
>>>>>>> origin:app/legacy-teams/page.tsx
