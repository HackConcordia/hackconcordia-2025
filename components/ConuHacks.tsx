"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { CircleChevronLeftIcon, CircleChevronRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

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
  }[];
  tag?: string;
  others?: Record<string, string>;
};



export default function ConuHacks() {
  const t = useTranslations("ConuHacks");

  const slides: Slide[] = [
    {
      id: 1,
      image: "/imgs/about_us2.jpg",
      title: t("slides.1.title"),
      subtitle: t("slides.1.subtitle"),
      stats: {
        Participants: "1000+",
        Projects: "200+",
        Mentors: "50+",
        Sponsors: "20+",
      },
      tag: "Hackathon",
      others: {
        Date: t("slides.1.others.date"),
        Location: t("slides.1.others.location"),
        Duration: t("slides.1.others.duration"),
        Theme: t("slides.1.others.theme"),
        Registration: t("slides.1.others.registration"),
        Website: "https://conuhacks.com",
      },
    },
    {
      id: 2,
      image: "/imgs/about_us1.jpg",
      title: t("slides.2.title"),
      subtitle: t("slides.2.subtitle"),
      stats: {
        Participants: "500+",
        Projects: "100+",
        Mentors: "30+",
        Sponsors: "10+",
      },
      winners: [
        {
          position: t("slides.2.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.2.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.2.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.2.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.2.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.2.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.2.tag"),
    },
    {
      id: 3,
      image: "/imgs/about_us3.jpg",
      title: t("slides.3.title"),
      subtitle: t("slides.3.subtitle"),
      stats: {
        Participants: "700+",
        Projects: "150+",
        Mentors: "40+",
        Sponsors: "15+",
      },
      winners: [
        {
          position: t("slides.3.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.3.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.3.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.3.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.3.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.3.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.3.tag"),
    },
    {
      id: 4,
      image: "/imgs/about_us3.jpg",
      title: t("slides.4.title"),
      subtitle: t("slides.4.subtitle"),
      stats: {
        Participants: "800+",
        Projects: "180+",
        Mentors: "45+",
        Sponsors: "18+",
      },
      winners: [
        {
          position: t("slides.4.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.4.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.4.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.4.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.4.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.4.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.4.tag"),
    },
    {
      id: 5,
      image: "/imgs/about_us3.jpg",
      title: t("slides.5.title"),
      subtitle: t("slides.5.subtitle"),
      stats: {
        Participants: "900+",
        Projects: "200+",
        Mentors: "50+",
        Sponsors: "20+",
      },
      winners: [
        {
          position: t("slides.5.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.5.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.5.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.5.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.5.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.5.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.5.tag"),
    },
    {
      id: 6,
      image: "/imgs/about_us3.jpg",
      title: t("slides.6.title"),
      subtitle: t("slides.6.subtitle"),
      stats: {
        Participants: "1000+",
        Projects: "250+",
        Mentors: "60+",
        Sponsors: "25+",
      },
      winners: [
        {
          position: t("slides.6.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.6.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.6.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.6.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.6.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.6.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.6.tag"),
    },
    {
      id: 7,
      image: "/imgs/about_us3.jpg",
      title: t("slides.7.title"),
      subtitle: t("slides.7.subtitle"),
      stats: {
        Participants: "1200+",
        Projects: "300+",
        Mentors: "70+",
        Sponsors: "30+",
      },
      winners: [
        {
          position: t("slides.7.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.7.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.7.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.7.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.7.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.7.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.7.tag"),
    },
    {
      id: 8,
      image: "/imgs/about_us3.jpg",
      title: t("slides.8.title"),
      subtitle: t("slides.8.subtitle"),
      stats: {
        Participants: "1500+",
        Projects: "350+",
        Mentors: "80+",
        Sponsors: "35+",
      },
      winners: [
        {
          position: t("slides.8.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.8.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.8.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.8.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.8.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.8.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.8.tag"),
    },
    {
      id: 9,
      image: "/imgs/about_us3.jpg",
      title: t("slides.9.title"),
      subtitle: t("slides.9.subtitle"),
      stats: {
        Participants: "1600+",
        Projects: "400+",
        Mentors: "90+",
        Sponsors: "40+",
      },
      winners: [
        {
          position: t("slides.9.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.9.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.9.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.9.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.9.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.9.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.9.tag"),
    },
    {
      id: 10,
      image: "/imgs/about_us3.jpg",
      title: t("slides.10.title"),
      subtitle: t("slides.10.subtitle"),
      stats: {
        Participants: "1800+",
        Projects: "450+",
        Mentors: "100+",
        Sponsors: "50+",
      },
      winners: [
        {
          position: t("slides.10.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.10.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.10.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.10.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.10.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.10.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.10.tag"),
    },
    {
      id: 11,
      image: "/imgs/about_us3.jpg",
      title: t("slides.11.title"),
      subtitle: t("slides.11.subtitle"),
      stats: {
        Participants: "2000+",
        Projects: "500+",
        Mentors: "120+",
        Sponsors: "60+",
      },
      winners: [
        {
          position: t("slides.11.winners.0.position"),
          team: "Team Alpha",
          project: "Project X",
          description: t("slides.11.winners.0.description"),
          devpostlink: "https://devpost.com/project-x",
        },
        {
          position: t("slides.11.winners.1.position"),
          team: "Team Beta",
          project: "Project Y",
          description: t("slides.11.winners.1.description"),
          devpostlink: "https://devpost.com/project-y",
        },
        {
          position: t("slides.11.winners.2.position"),
          team: "Team Gamma",
          project: "Project Z",
          description: t("slides.11.winners.2.description"),
          devpostlink: "https://devpost.com/project-z",
        },
      ],
      tag: t("slides.11.tag"),
    },
  ];

  const [active, setActive] = useState(0);

  const activeSlide = slides[active];
  const thumbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (thumbRefs.current[active]) {
      thumbRefs.current[active]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  const goToPrev = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden p-5 max-w-7xl mx-auto"
      style={{ maxHeight: "900px" }}
      id="conuhacks"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 my-20 mr-10 max-w-7xl">
        <Image
          src={activeSlide.image}
          alt={activeSlide.title}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-700 ease-in-out rounded-lg shadow-amber-100"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />
      </div>
      {/* Text Overlay */}
      <div className="relative z-10 h-full w-full flex px-10 md:px-10 py-25 mx-auto max-w-7xl">
        <div className="text-white">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-1"
            style={{ marginLeft: "-2px" }}
          >
            {activeSlide.title}
          </h1>
          <p
            className="text-xs max-w-5xl mb-5"
            dangerouslySetInnerHTML={{ __html: activeSlide.subtitle }}
          ></p>
          {activeSlide.stats && (
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm max-w-sm"
              style={{ marginTop: "15px" }}
            >
              {Object.entries(activeSlide.stats).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-2xl font-semibold">{value}</span>
                  <span className="text-xs opacity-70">{key}</span>
                </div>
              ))}
            </div>
          )}
          {activeSlide.winners && activeSlide.winners.length > 0 && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Winners:</h2>
              <ul className="list-none space-y-2">
                {activeSlide.winners.map((winner, index) => (
                  <li key={index} className="text-sm mt-3 mb-5">
                    <strong>{winner.position}</strong>
                    <a
                      href={winner.devpostlink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="hover:text-yellow-400">
                        {winner.team}: {winner.project}
                      </p>
                    </a>
                    {winner.description && (
                      <span className="block text-xs opacity-70">
                        {winner.description}
                      </span>
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
                    <li key={key} className="text-sm my-2">
                      <span className="text-yellow-400">{key}</span>: {value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
      <div className="absolute bottom-70 right-10 z-20 flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <button
            onClick={goToPrev}
            className="text-white hover:text-yellow-400 p-2 rounded-full bg-white/10 backdrop-blur-sm cursor-pointer"
          >
            <CircleChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="text-white hover:text-yellow-400 p-2 rounded-full bg-white/10 backdrop-blur-sm cursor-pointer"
          >
            <CircleChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Progress Bar (under thumbnails) */}
        <div className="z-20 w-[300px] h-1 bg-white/20 overflow-hidden">
          <div
            className="h-full bg-yellow-400 transition-all duration-300"
            style={{ width: `${(active + 1) * (100 / slides.length)}%` }}
          />
        </div>
        <div className="pr-3">
          <span className="text-white text-sm">
            {active + 1} / {slides.length}
          </span>
        </div>
      </div>
      {/* Carousel */}
      <div className="absolute bottom-10 right-0 z-20">
        <div
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
          style={{ maxWidth: "500px" }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => {
                thumbRefs.current[index] = el;
              }}
              className={clsx(
                "min-w-[180px] cursor-pointer rounded-lg border p-2 transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20",
                {
                  "border-yellow-400": index === active,
                }
              )}
              onClick={() => setActive(index)}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={160}
                height={100}
                className="rounded-md object-cover h-[160px]"
              />
              <div className="text-white mt-2">
                <div className="text-sm font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                  {slide.title}
                </div>
                <div className="text-xs opacity-70 text-ellipsis overflow-hidden whitespace-nowrap">
                  {slide.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
