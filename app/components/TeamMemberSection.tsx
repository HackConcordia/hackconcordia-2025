'use client';

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { TeamMember, teamMembers } from '../data/team.data';

export default function TeamMemberSection() {
    const [selected, setSelected] = useState<TeamMember>(teamMembers[0]);
    const [hovered, setHovered] = useState<TeamMember | null>(null);

    // Show hovered member if it's not the selected one
    const displayMember = hovered && hovered.id !== selected.id ? hovered : selected;

    return (
        <>
            <section className="relative z-10 w-screen md:h-screen flex flex-col justify-center max-w-7xl mx-auto p-4 md:p-0">
                <div className="mb-4 md:mb-12">
                    <div className="flex w-full justify-between items-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">Hive keepers</h2>
                        <Link
                            href="legacy-teams"
                            className="md:mt-4 px-4 md:px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-xs font-semibold"
                        >
                            Legacy Teams
                            <FaArrowRight className="inline-block ml-2 rotate-315" />
                        </Link>

                    </div>
                    <p className="mt-4 text-gray-400 text-sm">
                        Meet the dedicated team behind Conuhacks, working tirelessly to bring you the best hackathon experience.
                    </p>
                </div>

                <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-12 items-start text-white">
                    {/* Left Panel: Displayed Member Details */}
                    <div className="flex-1 max-w-xl">
                        <h3 className="text-2xl font-bold">{displayMember.name}</h3>
                        <p className="text-gray-400 mb-6 text-sm">{displayMember.position}</p>

                        <div className="flex space-x-4 mb-6">
                            {displayMember.socials?.linkedin && (
                                <a href={displayMember.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                                    <FaLinkedin className="w-5 h-5 hover:text-yellow-400" />
                                </a>
                            )}
                            {displayMember.socials?.github && (
                                <a href={displayMember.socials.github} target="_blank" rel="noreferrer" title="Github">
                                    <FaGithub className="w-5 h-5 hover:text-yellow-400" />
                                </a>
                            )}
                            {displayMember.socials?.instagram && (
                                <a href={displayMember.socials.instagram} target="_blank" rel="noreferrer" title="Instagram">
                                    <FaInstagram className="w-5 h-5 hover:text-yellow-400" />
                                </a>
                            )}
                            {displayMember.socials?.website && (
                                <a href={displayMember.socials.website} target="_blank" rel="noreferrer" title="Portfolio">
                                    <FaGlobe className="w-5 h-5 hover:text-yellow-400" />
                                </a>
                            )}
                        </div>


                        <p className="text-gray-300">{displayMember.intro}</p>
                    </div>

                    {/* Right Panel: Scrollable Team Avatars */}
                    <div className="md:flex-1 max-w-[calc(100vw-2rem)] md:max-w-2xl overflow-x-auto md:ml-auto">
                        <div className="flex w-100 pb-4">
                            {teamMembers.map((member) => {
                                const isSelected = selected.id === member.id;

                                return (
                                    <div
                                        key={member.id}
                                        onClick={() => setSelected(member)}
                                        onMouseEnter={() => setHovered(member)}
                                        onMouseLeave={() => setHovered(null)}
                                        className={`relative transition-all duration-300 ease-in-out
                                        ${isSelected ? 'border-2 border-yellow-600' : 'border-transparent'}
                                    `}
                                        style={{
                                            minWidth: hovered?.id === member.id || isSelected ? '250px' : '150px',
                                            maxWidth: '',
                                            height: '400px',
                                        }}
                                    >
                                        <Image
                                            src={member.imageSrc}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}