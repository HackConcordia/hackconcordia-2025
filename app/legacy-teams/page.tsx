'use client';

import Image from 'next/image';
import React, { useState } from 'react';

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
  displayNumber?: string;
  year: number;
  bgImage: string;
  subteams: Subteam[];
};

const timelineData: TimelinePanel[] = [
  {
    number: 9,
    displayNumber: 'IX',
    year: 2025,
    bgImage: '/imgs/legacy-teams/conu9.jpg',
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
    displayNumber: 'VIII',
    year: 2024,
    bgImage: '/imgs/legacy-teams/conu8.jpg',
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
    number: 7,
    displayNumber: 'VII',
    year: 2023,
    bgImage: '/imgs/legacy-teams/conu7.jpg',
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
    number: 4,
    displayNumber: 'IV',
    year: 2019,
    bgImage: '/imgs/legacy-teams/conu4.jpg',
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
    number: 2,
    displayNumber: 'II',
    year: 2017,
    bgImage: '/imgs/legacy-teams/conu2.jpg',
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
];

const Timeline: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(9);

  const handleCardClick = (number: number) => {
    setActiveCard((prev: number | null) => (prev === number ? null : number));
  };

  return (
    <div className="w-full overflow-y-auto md:overflow-x-auto md:overflow-y-hidden">
      <section
        id="timeline"
        className="
      flex 
      flex-col md:flex-row 
      h-auto md:h-[calc(87vh-5px)]
      w-full md:w-fit 
      snap-y md:snap-x 
      snap-mandatory pb-20 md:pb-2
    "
      >
        {timelineData.map(({ number, displayNumber, year, bgImage }) => {
          const isActive = activeCard === number;

          return (
            <div
              key={number}
              onClick={() => handleCardClick(number)}
              className={`group relative flex-shrink-0 
  w-full h-[30vh] md:min-w-[300px] md:h-full
  text-white transition-all duration-500 ease-in-out snap-start
  ${isActive ? 'md:w-[70%]' : 'md:w-[30%]'} 
  md:hover:w-[70%]`}

            >
              {/* Background Image */}
              <Image
                src={bgImage}
                alt={`Conuhacks ${displayNumber} Team Photo`}
                fill
                className={`absolute inset-0 object-cover transition duration-500 ease-in-out filter 
                  ${isActive ? 'grayscale-0' : 'grayscale'} 
                  md:group-hover:grayscale-0`}
              />


              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 pointer-events-none"></div>

              {/* Content */}
              <div
                className={`absolute inset-0 z-10 flex items-end transition-opacity duration-300
                  ${isActive ? 'opacity-100' : 'opacity-0'} 
                  md:group-hover:opacity-100`}
              >
                <div className="w-full p-2 md:p-4 overflow-y-auto max-h-full text-left backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2">
                    <h2 className="text-sm md:text-2xl font-bold uppercase text-yellow-400">
                      Conuhacks {displayNumber}
                    </h2>
                    <p className="text-sm md:text-lg font-semibold">
                      ({year - 1} - {year})
                    </p>
                  </div>

                  {/* Subteams */}
                  {/* <div className="grid grid-cols-4 gap-x-6 gap-y-4 mt-4">
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
                  </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Timeline;