'use client';

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from "next-intl";

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
        website?: string;
    };
};





export default function TeamMemberSection() {

    const t = useTranslations("TeamMember");
    const teamMembers: TeamMember[] = [
      {
        id: 1,
        name: "Bertin Mihigo Sano",
        position: t("team.1.position"),
        intro: t("team.1.intro"),
        imageSrc: "/imgs/team/Bertin.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/sanobertin/",
          github: "https://github.com/sanobertin",
        },
      },
      {
        id: 2,
        name: "Elizabeth Wong",
        position: "Co-President",
        intro:
          "Bachelor Computer Science Student with a Joint Major in Data Science student and co-president of HackConcordia.",
        imageSrc: "/imgs/team/liz.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/e-lizabethwong/",
          github: "https://github.com/e-lizabethwong",
        },
      },
      {
        id: 3,
        name: "Mohammed Huzaifa",
        position: t("team.3.position"),
        intro: t("team.3.intro"),
        imageSrc: "/imgs/team/mohammed_huzaifa.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/huzaifa-anjum/",
          github: "https://github.com/mhuzaifa",
          instagram: "https://www.instagram.com/_huzaifaanjum_/",
          website: "https://huzaifaanjumportfolio.web.app/",
        },
      },
      {
        id: 4,
        name: "Masoumeh Farokhpour (Maryam)",
        position: t("team.4.position"),
        intro: t("team.4.intro"),
        imageSrc: "/imgs/team/masoumeh_farokhpour.jpg",
        socials: {
          linkedin: "https://linkedin.com/in/masoumeh-farokhpour",
          github: "https://github.com/MasoumehF",
          instagram: "https://www.instagram.com/themaryaam",
        },
      },
      {
        id: 5,
        name: "Sabine Hleiss",
        position: t("team.5.position"),
        intro: t("team.5.intro"),

        imageSrc: "/imgs/team/sabine_hleiss.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/sabinehleiss/",
        },
      },
      {
        id: 6,
        name: "Matthew Lucas Santiago",
        position: t("team.6.position"),
        intro: t("team.6.intro"),
        imageSrc: "/imgs/team/matthew_lucas_santiago.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/matthew-lucas-santiago",
        },
      },
      {
        id: 7,
        name: "Elba Lucia Jimenez",
        position: t("team.7.position"),
        intro: t("team.7.intro"),
        imageSrc: "/imgs/team/elba_lucia_jimenez.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/elba-lucia-jimenez-296b0b152/",
        },
      },
      {
        id: 8,
        name: "Johnny Dang",
        position: t("team.8.position"),
        intro: t("team.8.intro"),
        imageSrc: "/imgs/team/johnny_dang.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/johnnydang22/",
        },
      },
      {
        id: 9,
        name: "Christina Alexandrakis",
        position: t("team.9.position"),
        intro: t("team.9.intro"),
        imageSrc: "/imgs/team/christina_alexandrakis.jpg",
        socials: {
          linkedin:
            "https://www.linkedin.com/in/christina-alexandrakis-2590b2338",
        },
      },
      {
        id: 10,
        name: "Valeria Rosca",
        position: t("team.10.position"),
        intro: t("team.10.intro"),
        imageSrc: "/imgs/team/valeria_rosca.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/valeria-rosca",
        },
      },
      {
        id: 11,
        name: "Mohamad Addasi",
        position: t("team.11.position"),
        intro: t("team.11.intro"),
        imageSrc: "/imgs/team/mohamad_addasi.jpg",
        socials: {
          linkedin: "https://linkedin.com/in/mohamad-addasi",
          github: "https://github.com/Moe1177",
        },
      },
      {
        id: 12,
        name: "Tiffany Andriamiharimanana",
        position: t("team.12.position"),
        intro: t("team.12.intro"),
        imageSrc: "/imgs/team/tiffany_andriamiharimanana.jpg",
        socials: {
          linkedin:
            "https://www.linkedin.com/in/tiffany-soa-andriamiharimanana/",
        },
      },
      {
        id: 13,
        name: "Mridani Kashyap (Dani)",
        position: t("team.13.position"),
        intro: t("team.13.intro"),
        imageSrc: "/imgs/team/mridani_kashyap.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/mridani-kashyap",
        },
      },
      {
        id: 14,
        name: "Alisa Ignatina",
        position: t("team.14.position"),
        intro: t("team.14.intro"),
        imageSrc: "/imgs/team/alisa_ignatina.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/alisa-ignatina",
          github: "https://github.com/alisaign",
          instagram:
            "https://www.instagram.com/alisaa_ign?igsh=dDRpcW0ydmI0d2Fp",
        },
      },
      {
        id: 15,
        name: "Huseyin Pilavci",
        position: t("team.15.position"),
        intro: t("team.15.intro"),
        imageSrc: "/imgs/team/huseyin_pilavci.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/huseyin-pilavci",
        },
      },
      {
        id: 16,
        name: "Janani Thiyagarajah",
        position: t("team.16.position"),
        intro: t("team.16.intro"),
        imageSrc: "/imgs/team/janani_thiyagarajah.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/janani-thiyagarajah",
        },
      },
      {
        id: 17,
        name: "Mijan Ullah",
        position: t("team.17.position"),
        intro: t("team.17.intro"),
        imageSrc: "/imgs/team/mijan.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/mijan-ullah-4b99b3298/",
          github: "https://github.com/mijanullah12",
        },
      },
      {
        id: 18,
        name: "Subaanky Krishnapillai",
        position: t("team.18.position"),
        intro: t("team.18.intro"),
        imageSrc: "/imgs/team/subaanky_krishnapillai.jpg",
        socials: {
          linkedin: "https://www.linkedin.com/in/subaankykrishnapillai",
          github: "http://github.com/Subaanky",
        },
      },
      {
        id: 19,
        name: "Louay Helou",
        position: "Director of Technology",
        intro: "BCompSc student passionate about Coding.",
        imageSrc: "/imgs/team/Louay.jpg",
        socials: {
          linkedin:
            "https://www.linkedin.com/in/christina-alexandrakis-2590b2338",
        },
      },
    ];
    const [selected, setSelected] = useState<TeamMember>(teamMembers[0]);
    const [hovered, setHovered] = useState<TeamMember | null>(null);

    
    // Show hovered member if it's not the selected one
    const displayMember = hovered && hovered.id !== selected.id ? hovered : selected;

    return (
        <>
            <section className="relative z-10 w-screen md:h-screen flex flex-col justify-center max-w-7xl mx-auto p-4 md:p-0" id="team">
                <div className="mb-4 md:mb-12">
                    <div className="flex w-full justify-between items-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">{t("title")}</h2>
                        <Link
                            href="legacy-teams"
                            className="md:mt-4 px-4 md:px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition text-xs font-semibold"
                        >
                            {t("legacyButton")}
                            <FaArrowRight className="inline-block ml-2 rotate-315" />
                        </Link>

                    </div>
                    <p className="mt-4 text-gray-400 text-sm">
                        {t("description")}
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
                                        className={`relative cursor-pointer transition-all duration-300 ease-in-out
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