'use client';

import React from 'react';

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

const Timeline: React.FC = () => {
  return (
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

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 pointer-events-none"></div>

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
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Timeline;
