'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TwitterIcon, DribbbleIcon, VideoIcon, LucideTwitter } from 'lucide-react'; // Replace with your icon library

type TeamMember = {
    id: number;
    name: string;
    position: string;
    intro: string;
    avatar: string;
    socials?: {
        twitter?: string;
        dribbble?: string;
        video?: string;
    };
};

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://images.pexels.com/photos/769690/pexels-photo-769690.jpeg?_gl=1*sxhp64*_ga*MTI0MTExMjY3Ny4xNzUzMzk5MzEz*_ga_8JE65Q40S6*czE3NTMzOTkzMTMkbzEkZzEkdDE3NTMzOTk0NzAkajU5JGwwJGgw',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
        id: 3,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*j9xn5u*_ga*MTI0MTExMjY3Ny4xNzUzMzk5MzEz*_ga_8JE65Q40S6*czE3NTMzOTkzMTMkbzEkZzEkdDE3NTMzOTkzNjEkajEyJGwwJGgw',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 4,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?_gl=1*kud2u0*_ga*MTI0MTExMjY3Ny4xNzUzMzk5MzEz*_ga_8JE65Q40S6*czE3NTMzOTkzMTMkbzEkZzEkdDE3NTMzOTkzMjEkajUyJGwwJGgw',
    },
    {
        id: 5,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 6,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://images.pexels.com/photos/2568413/pexels-photo-2568413.jpeg?_gl=1*1mh9ce2*_ga*MTI0MTExMjY3Ny4xNzUzMzk5MzEz*_ga_8JE65Q40S6*czE3NTMzOTkzMTMkbzEkZzEkdDE3NTMzOTk1OTEkajI2JGwwJGgw',
    },
    {
        id: 7,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 8,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
    },
    {
        id: 9,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 10,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
    },
    {
        id: 11,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 12,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
    },
    {
        id: 13,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 14,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
    },
    {
        id: 15,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 16,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
    },
    {
        id: 17,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 18,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
    },
    {
        id: 19,
        name: 'Aaron Williams',
        position: 'Head of Design Department',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
        socials: {
            twitter: '#',
            dribbble: '#',
            video: '#',
        },
    },
    {
        id: 20,
        name: 'Jane Smith',
        position: 'Frontend Developer',
        intro: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        avatar: 'https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg',
    },
    // ...add more (30+ as needed)
];

export default function TeamMemberSection() {
    const [selected, setSelected] = useState<TeamMember>(teamMembers[0]);
    const [hovered, setHovered] = useState<TeamMember | null>(null);

    // Show hovered member if it's not the selected one
    const displayMember = hovered && hovered.id !== selected.id ? hovered : selected;

    return (
        <section className="relative z-10 w-screen h-screen flex flex-col justify-center max-w-7xl mx-auto" id="team">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-yellow-400">Hive keepers</h2>
                <p className="mt-4 text-gray-400">
                    Meet the dedicated team behind Conuhacks, working tirelessly to bring you the best hackathon experience.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start text-white">
                {/* Left Panel: Displayed Member Details */}
                <div className="flex-1 max-w-xl">
                    <h3 className="text-2xl font-bold">{displayMember.name}</h3>
                    <p className="text-gray-400 mb-4">{displayMember.position}</p>

                    <div className="flex space-x-4 mb-6">
                        {displayMember.socials?.twitter && (
                            <a href={displayMember.socials.twitter} target="_blank" rel="noreferrer">
                                <LucideTwitter className="w-5 h-5 hover:text-yellow-400" />
                            </a>
                        )}
                        {displayMember.socials?.dribbble && (
                            <a href={displayMember.socials.dribbble} target="_blank" rel="noreferrer">
                                <DribbbleIcon className="w-5 h-5 hover:text-yellow-400" />
                            </a>
                        )}
                        {displayMember.socials?.video && (
                            <a href={displayMember.socials.video} target="_blank" rel="noreferrer">
                                <VideoIcon className="w-5 h-5 hover:text-yellow-400" />
                            </a>
                        )}
                    </div>

                    <p className="text-gray-300">{displayMember.intro}</p>
                </div>

                {/* Right Panel: Scrollable Team Avatars */}
                <div className="flex-1 max-w-2xl overflow-x-auto ml-auto">
                    <div className="flex pb-4">
                        {teamMembers.map((member) => {
                            const isSelected = selected.id === member.id;

                            return (
                                <div
                                    key={member.id}
                                    onClick={() => setSelected(member)}
                                    onMouseEnter={() => setHovered(member)}
                                    onMouseLeave={() => setHovered(null)}
                                    className={`relative cursor-pointer transition-all duration-300 ease-in-out
                                        ${isSelected ? 'border-2 border-yellow-600' : 'border-transparent'}
                                    `}
                                    style={{
                                        minWidth: hovered?.id === member.id || isSelected ? '250px' : '150px',
                                        height: '400px',
                                    }}
                                >
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Optional: name overlay on hover (for clarity) */}
                                    {/* {hovered?.id === member.id && !isSelected && (
                                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2 text-white text-sm">
                                            {member.name}
                                        </div>
                                    )} */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}