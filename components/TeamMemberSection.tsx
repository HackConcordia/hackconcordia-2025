"use client";

import { useState } from "react";
import Image from "next/image";
import {
  TwitterIcon,
  DribbbleIcon,
  VideoIcon,
  LucideTwitter,
} from "lucide-react"; // Replace with your icon library
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import BeeCursor from "./FloatingBeeCursor";
import { useTranslations } from "next-intl";

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

export default function TeamMemberSection() {
  const t = useTranslations("TeamMember");

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Aaron Williams",
      position: t("team.1.position"),
      intro: t("team.1.intro"),
      avatar:
        "https://images.pexels.com/photos/769690/pexels-photo-769690.jpeg?_gl=1*sxhp64*_ga*MTI0MTExMjY3Ny4xNzUzMzk5MzEz*_ga_8JE65Q40S6*czE3NTMzOTkzMTMkbzEkZzEkdDE3NTMzOTk0NzAkajU5JGwwJGgw",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      position: t("team.2.position"),
      intro: t("team.2.intro"),
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Aaron Williams",
      position: t("team.3.position"),
      intro: t("team.3.intro"),
      avatar:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?_gl=1*j9xn5u*_ga*MTI0MTExMjY3Ny4xNzUzMzk5MzEz*_ga_8JE65Q40S6*czE3NTMzOTkzMTMkbzEkZzEkdDE3NTMzOTkzNjEkajEyJGwwJGgw",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 4,
      name: "Jane Smith",
      position: t("team.4.position"),
      intro: t("team.4.intro"),
      avatar:
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?_gl=1*kud2u0*_ga*MTI0MTExMjY3Ny4xNzUzMzk5MzEz*_ga_8JE65Q40S6*czE3NTMzOTkzMTMkbzEkZzEkdDE3NTMzOTkzMjEkajUyJGwwJGgw",
    },
    {
      id: 5,
      name: "Aaron Williams",
      position: t("team.5.position"),
      intro: t("team.5.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 6,
      name: "Jane Smith",
      position: t("team.6.position"),
      intro: t("team.6.intro"),
      avatar:
        "https://images.pexels.com/photos/2568413/pexels-photo-2568413.jpeg?_gl=1*1mh9ce2*_ga*MTI0MTExMjY3Ny4xNzUzMzk5MzEz*_ga_8JE65Q40S6*czE3NTMzOTkzMTMkbzEkZzEkdDE3NTMzOTk1OTEkajI2JGwwJGgw",
    },
    {
      id: 7,
      name: "Aaron Williams",
      position: t("team.7.position"),
      intro: t("team.7.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 8,
      name: "Jane Smith",
      position: t("team.8.position"),
      intro: t("team.8.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
    },
    {
      id: 9,
      name: "Aaron Williams",
      position: t("team.9.position"),
      intro: t("team.9.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 10,
      name: "Jane Smith",
      position: t("team.10.position"),
      intro: t("team.10.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
    },
    {
      id: 11,
      name: "Aaron Williams",
      position: t("team.11.position"),
      intro: t("team.11.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 12,
      name: "Jane Smith",
      position: t("team.12.position"),
      intro: t("team.12.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
    },
    {
      id: 13,
      name: "Aaron Williams",
      position: t("team.13.position"),
      intro: t("team.13.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 14,
      name: "Jane Smith",
      position: t("team.14.position"),
      intro: t("team.14.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
    },
    {
      id: 15,
      name: "Aaron Williams",
      position: t("team.15.position"),
      intro: t("team.15.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 16,
      name: "Jane Smith",
      position: t("team.16.position"),
      intro: t("team.16.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
    },
    {
      id: 17,
      name: "Aaron Williams",
      position: t("team.17.position"),
      intro: t("team.17.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 18,
      name: "Jane Smith",
      position: t("team.18.position"),
      intro: t("team.18.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
    },
    {
      id: 19,
      name: "Aaron Williams",
      position: t("team.19.position"),
      intro: t("team.19.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
      socials: {
        twitter: "#",
        dribbble: "#",
        video: "#",
      },
    },
    {
      id: 20,
      name: "Jane Smith",
      position: t("team.20.position"),
      intro: t("team.20.intro"),
      avatar:
        "https://cloudcommercepro.com/wp-content/uploads/2022/06/dummy-customer.jpg",
    },
    // ...add more (30+ as needed)
  ];

  const [selected, setSelected] = useState<TeamMember>(teamMembers[0]);
  const [hovered, setHovered] = useState<TeamMember | null>(null);

  // Show hovered member if it's not the selected one
  const displayMember =
    hovered && hovered.id !== selected.id ? hovered : selected;

  return (
    <>
      <BeeCursor />
      <section
        className="relative z-10 w-screen h-screen flex flex-col justify-center max-w-7xl mx-auto"
        id="team"
      >
        <div className="mb-12">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-4xl font-bold text-yellow-400">
              {t("team.title")}
            </h2>
            {/* Legacy teams button */}
            <Link
              href="legacy-teams"
              className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
              {t("team.legacyButton")}
              <FaArrowRight className="inline-block ml-2 rotate-315" />
            </Link>
          </div>
          <p className="mt-4 text-gray-400">{t("team.description")}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start text-white">
          {/* Left Panel: Displayed Member Details */}
          <div className="flex-1 max-w-xl">
            <h3 className="text-2xl font-bold">{displayMember.name}</h3>
            <p className="text-gray-400 mb-4">{displayMember.position}</p>

            <div className="flex space-x-4 mb-6">
              {displayMember.socials?.twitter && (
                <a
                  href={displayMember.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LucideTwitter className="w-5 h-5 hover:text-yellow-400" />
                </a>
              )}
              {displayMember.socials?.dribbble && (
                <a
                  href={displayMember.socials.dribbble}
                  target="_blank"
                  rel="noreferrer"
                >
                  <DribbbleIcon className="w-5 h-5 hover:text-yellow-400" />
                </a>
              )}
              {displayMember.socials?.video && (
                <a
                  href={displayMember.socials.video}
                  target="_blank"
                  rel="noreferrer"
                >
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
                                        ${
                                          isSelected
                                            ? "border-2 border-yellow-600"
                                            : "border-transparent"
                                        }
                                    `}
                    style={{
                      minWidth:
                        hovered?.id === member.id || isSelected
                          ? "250px"
                          : "150px",
                      height: "400px",
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
    </>
  );
}
