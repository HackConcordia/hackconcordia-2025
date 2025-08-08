'use client';

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

type TeamMember = {
    id: number;
    name: string;
    position: string;
    intro: string;
    imageSrc: string;
    socials?: {
        linkedin?: string;
        github?: string;
        instagram?: string;
    };
};

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Mohammed Huzaifa",
        position: "VP Tech",
        intro: "Master of Applied Computer Science student passionate about full-stack development and building impactful tech solutions.",
        imageSrc: "/imgs/team/mohammed_huzaifa.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/huzaifa-anjum/",
            github: "https://github.com/mhuzaifa",
            instagram: "https://www.instagram.com/_huzaifaanjum_/"
        }
    },
    {
        id: 2,
        name: "Masoumeh Farokhpour (Maryam)",
        position: "Director Tech",
        intro: "MACS student with a strong interest in innovative software development and collaborative tech projects.",
        imageSrc: "/imgs/team/masoumeh_farokhpour.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/masoumeh-farokhpour",
            github: "https://github.com/MasoumehF",
            instagram: "https://www.instagram.com/themaryaam"
        }
    },
    {
        id: 3,
        name: "Sabine Hleiss",
        position: "Director of Sponsorship",
        intro: "COEN student committed to fostering strong partnerships and sponsor relationships for impactful events.",
        imageSrc: "/imgs/team/sabine_hleiss.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/sabinehleiss/"
        }
    },
    {
        id: 4,
        name: "Matthew Lucas Santiago",
        position: "Director of Marketing",
        intro: "SOEN student with a drive for impactful communication and outreach.",
        imageSrc: "/imgs/team/matthew_lucas_santiago.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/matthew-lucas-santiago"
        }
    },
    {
        id: 5,
        name: "Elba Lucia Jimenez",
        position: "VP Marketing",
        intro: "CompSci student dedicated to promoting events and creating vibrant community connections.",
        imageSrc: "/imgs/team/elba_lucia_jimenez.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/elba-lucia-jimenez-296b0b152/"
        }
    },
    {
        id: 6,
        name: "Johnny Dang",
        position: "Director Tech",
        intro: "SOEN student with an interest in cutting-edge technologies and efficient problem-solving.",
        imageSrc: "/imgs/team/johnny_dang.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/johnnydang22/"
        }
    },
    {
        id: 7,
        name: "Christina Alexandrakis",
        position: "Director of Marketing",
        intro: "SOEN student passionate about creative marketing campaigns and community engagement.",
        imageSrc: "/imgs/team/christina_alexandrakis.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/christina-alexandrakis-2590b2338"
        }
    },
    {
        id: 8,
        name: "Valeria Rosca",
        position: "Director of Sponsorship",
        intro: "SOEN student with a passion for connecting with partners and creating mutually beneficial collaborations.",
        imageSrc: "/imgs/team/valeria_rosca.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/valeria-rosca"
        }
    },
    {
        id: 9,
        name: "Mohamad Addasi",
        position: "Director Tech",
        intro: "SOEN student focused on scalable, efficient software engineering and emerging technologies.",
        imageSrc: "/imgs/team/mohamad_addasi.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/mohamad-addasi",
            github: "https://github.com/Moe1177"
        }
    },
    {
        id: 10,
        name: "Tiffany Andriamiharimanana",
        position: "Director Tech",
        intro: "SOEN student passionate about software development and inclusive tech communities.",
        imageSrc: "/imgs/team/tiffany_andriamiharimanana.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/tiffany-soa-andriamiharimanana/"
        }
    },
    {
        id: 11,
        name: "Mridani Kashyap (Dani)",
        position: "Director of Marketing",
        intro: "Marketing student passionate about creative storytelling and audience engagement.",
        imageSrc: "/imgs/team/mridani_kashyap.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/mridani-kashyap"
        }
    },
    {
        id: 12,
        name: "Alisa Ignatina",
        position: "Director of Events",
        intro: "Data Science student passionate about designing engaging, memorable experiences for participants.",
        imageSrc: "/imgs/team/alisa_ignatina.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/alisa-ignatina",
            github: "https://github.com/alisaign",
            instagram: "https://www.instagram.com/alisaa_ign?igsh=dDRpcW0ydmI0d2Fp"
        }
    },
    {
        id: 13,
        name: "Huseyin Pilavci",
        position: "Director of Logistics",
        intro: "BCompSc student dedicated to seamless event planning and operational efficiency.",
        imageSrc: "/imgs/team/huseyin_pilavci.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/huseyin-pilavci"
        }
    },
    {
        id: 14,
        name: "Janani Thiyagarajah",
        position: "Director of Marketing",
        intro: "Industrial Engineering student focused on impactful brand strategies and outreach.",
        imageSrc: "/imgs/team/janani_thiyagarajah.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/janani-thiyagarajah"
        }
    },
    {
        id: 15,
        name: "Subaanky Krishnapillai",
        position: "Director of Sponsorship",
        intro: "SOEN student working to strengthen corporate relationships and ensure event success.",
        imageSrc: "/imgs/team/subaanky_krishnapillai.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/subaankykrishnapillai",
            github: "http://github.com/Subaanky"
        }
    }
];



export default function TeamMemberSection() {
    const [selected, setSelected] = useState<TeamMember>(teamMembers[0]);
    const [hovered, setHovered] = useState<TeamMember | null>(null);

    // Show hovered member if it's not the selected one
    const displayMember = hovered && hovered.id !== selected.id ? hovered : selected;

    return (
        <>
            <section className="relative z-10 w-screen md:h-screen flex flex-col justify-center max-w-7xl mx-auto p-4 md:p-0" id="team">
                <div className="mb-4 md:mb-12">
                    <div className="flex w-full justify-between items-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Hive keepers</h2>
                        <Link
                            href="legacy-teams"
                            className="md:mt-4 px-4 md:px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
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
                        <p className="text-gray-400 mb-4">{displayMember.position}</p>

                        <div className="flex space-x-4 mb-6">
                            {displayMember.socials?.linkedin && (
                                <a href={displayMember.socials.linkedin} target="_blank" rel="noreferrer">
                                    <FaLinkedin className="w-5 h-5 hover:text-yellow-400" />
                                </a>
                            )}
                            {displayMember.socials?.github && (
                                <a href={displayMember.socials.github} target="_blank" rel="noreferrer">
                                    <FaGithub className="w-5 h-5 hover:text-yellow-400" />
                                </a>
                            )}
                            {displayMember.socials?.instagram && (
                                <a href={displayMember.socials.instagram} target="_blank" rel="noreferrer">
                                    <FaInstagram className="w-5 h-5 hover:text-yellow-400" />
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
                                        className={`relative cursor-pointer transition-all duration-300 ease-in-out
                                        ${isSelected ? 'border-2 border-yellow-600' : 'border-transparent'}
                                    `}
                                        style={{
                                            minWidth: hovered?.id === member.id || isSelected ? '250px' : '150px',
                                            maxWidth: '',
                                            height: '400px',
                                        }}
                                    >
                                        <img
                                            src={member.imageSrc}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
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