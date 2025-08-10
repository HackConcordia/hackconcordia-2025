'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { CircleChevronLeftIcon, CircleChevronRightIcon } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';
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
        youtube?: string;
    }[];
    tag?: string;
    others?: Record<string, string>;
    devpost?: string;
};




export default function ConuHacks() {
    const t = useTranslations("ConuHacks");

    const slides: Slide[] = [
      // 1) ConUHacks overview
      {
        id: 1,
        image: "/imgs/about_us2.jpg",
        title: t("slide1.title"),
        subtitle: t("slide1.subtitle"),
        stats: undefined,
        tag: t("slide1.tag"),
        others: {
          Date: t("slide1.others.date"),
          Location: t("slide1.others.location"),
          Duration: t("slide1.others.duration"),
          Theme: t("slide1.others.theme"),
          Registration: t("slide1.others.registration"),
          Website: "https://conuhacks.io",
        },
      },

      // ConUHacks IX – The Next Frontier (2025)
      {
        id: 10,
        image: "/imgs/about_us3.jpg",
        title: t("slide10.title"),
        subtitle: t("slide10.subtitle"),
        stats: {
          Participants: t("slide10.stats.participants"),
          Projects: t("slide10.stats.projects"),
          Mentors: t("slide10.stats.mentors"),
          Sponsors: t("slide10.stats.sponsors"),
        },
        winners: [
          {
            position: "1",
            team: t("slide10.winners.1.team"),
            project: t("slide10.winners.1.project"),
            description: t("slide10.winners.1.description"),
            devpostlink: "https://devpost.com/software/prezpal-36079w",
            youtube: "https://youtu.be/yamqvno6T1g",
          },
          {
            position: "2",
            team: t("slide10.winners.2.team"),
            project: t("slide10.winners.2.project"),
            description: t("slide10.winners.2.description"),
            devpostlink: "https://devpost.com/software/leetwrite",
            youtube: "https://youtu.be/CKVScKptAec",
          },
          {
            position: "3",
            team: t("slide10.winners.3.team"),
            project: t("slide10.winners.3.project"),
            description: t("slide10.winners.3.description"),
            devpostlink: "https://devpost.com/software/404-lost-found",
            youtube: "https://youtu.be/BHq4QkTe6PE",
          },
        ],
        tag: t("slide10.tag"),
        devpost: "https://conuhacks-ix.devpost.com/",
      },

      // ConUHacks VIII – Uncharted Territories (2024)
      {
        id: 9,
        image: "/imgs/about_us3.jpg",
        title: t("slide9.title"),
        subtitle: t("slide9.subtitle"),
        stats: {
          Participants: t("slide9.stats.participants"),
          Projects: t("slide9.stats.projects"),
          Mentors: t("slide9.stats.mentors"),
          Sponsors: t("slide9.stats.sponsors"),
        },
        winners: [
          {
            position: "1",
            team: t("slide9.winners.1.team"),
            project: t("slide9.winners.1.project"),
            description: t("slide9.winners.1.description"),
            devpostlink: "https://devpost.com/software/spartan",
            youtube: "https://youtu.be/nfhIwxx5KrE",
          },
          {
            position: "2",
            team: t("slide9.winners.2.team"),
            project: t("slide9.winners.2.project"),
            description: t("slide9.winners.2.description"),
            devpostlink: "https://devpost.com/software/motispectra",
            youtube: "https://youtu.be/yr4MhT2WnGA",
          },
          {
            position: "3",
            team: t("slide9.winners.3.team"),
            project: t("slide9.winners.3.project"),
            description: t("slide9.winners.3.description"),
            devpostlink: "https://devpost.com/software/avada-kedavra",
          },
        ],
        tag: t("slide9.tag"),
      },

      // ConUHacks VII – Breaking Boundaries (2023)
      {
        id: 8,
        image: "/imgs/about_us3.jpg",
        title: t("slide8.title"),
        subtitle: t("slide8.subtitle"),
        stats: {
          Participants: t("slide8.stats.participants"),
          Projects: t("slide8.stats.projects"),
          Mentors: t("slide8.stats.mentors"),
          Sponsors: t("slide8.stats.sponsors"),
        },
        winners: [
          {
            position: "1",
            team: t("slide8.winners.1.team"),
            project: t("slide8.winners.1.project"),
            description: t("slide8.winners.1.description"),
            devpostlink: "https://devpost.com/software/nearbynow",
          },
          {
            position: "2",
            team: t("slide8.winners.2.team"),
            project: t("slide8.winners.2.project"),
            description: t("slide8.winners.2.description"),
            devpostlink: "https://devpost.com/software/jane-9jka4i",
          },
          {
            position: "3",
            team: t("slide8.winners.3.team"),
            project: t("slide8.winners.3.project"),
            description: t("slide8.winners.3.description"),
            devpostlink: "https://devpost.com/software/mlody",
          },
        ],
        tag: t("slide8.tag"),
      },

      // ConUHacks VI – Innovation Unleashed (2022)
      {
        id: 7,
        image: "/imgs/about_us3.jpg",
        title: t("slide7.title"),
        subtitle: t("slide7.subtitle"),
        stats: {
          Participants: t("slide7.stats.participants"),
          Projects: t("slide7.stats.projects"),
          Mentors: t("slide7.stats.mentors"),
          Sponsors: t("slide7.stats.sponsors"),
        },
        winners: [
          {
            position: "1",
            team: t("slide7.winners.1.team"),
            project: t("slide7.winners.1.project"),
            description: t("slide7.winners.1.description"),
            devpostlink: "https://devpost.com/software/revyou",
          },
          {
            position: "2",
            team: t("slide7.winners.2.team"),
            project: t("slide7.winners.2.project"),
            description: t("slide7.winners.2.description"),
            devpostlink: "https://devpost.com/software/four-o-four",
            youtube: "https://youtu.be/UrS1tbuyW8Y",
          },
          {
            position: "3",
            team: t("slide7.winners.3.team"),
            project: t("slide7.winners.3.project"),
            description: t("slide7.winners.3.description"),
            devpostlink: "https://devpost.com/software/furnishare",
            youtube: "https://youtu.be/nycW-l9_gDg",
          },
        ],
        tag: t("slide7.tag"),
      },

      // ConUHacks V – A New Era (2020)
      {
        id: 6,
        image: "/imgs/about_us3.jpg",
        title: t("slide6.title"),
        subtitle: t("slide6.subtitle"),
        stats: {
          Participants: t("slide6.stats.participants"),
          Projects: t("slide6.stats.projects"),
          Mentors: t("slide6.stats.mentors"),
          Sponsors: t("slide6.stats.sponsors"),
        },
        winners: [
          {
            position: "1",
            team: t("slide6.winners.1.team"),
            project: t("slide6.winners.1.project"),
            description: t("slide6.winners.1.description"),
            devpostlink: "https://devpost.com/software/booklens",
          },
          {
            position: "2",
            team: t("slide6.winners.2.team"),
            project: t("slide6.winners.2.project"),
            description: t("slide6.winners.2.description"),
            devpostlink: "https://devpost.com/software/lifetrainer",
          },
          {
            position: "3",
            team: t("slide6.winners.3.team"),
            project: t("slide6.winners.3.project"),
            description: t("slide6.winners.3.description"),
            devpostlink: "https://devpost.com/software/bit-wizards-7u1sl4",
          },
        ],
        tag: t("slide6.tag"),
      },

      // ConUHacks IV – The Future Awaits (2019)
      {
        id: 5,
        image: "/imgs/about_us3.jpg",
        title: t("slide5.title"),
        subtitle: t("slide5.subtitle"),
        stats: {
          Participants: t("slide5.stats.participants"),
          Projects: t("slide5.stats.projects"),
          Mentors: t("slide5.stats.mentors"),
          Sponsors: t("slide5.stats.sponsors"),
        },
        winners: [
          {
            position: "1",
            team: t("slide5.winners.1.team"),
            project: t("slide5.winners.1.project"),
            description: t("slide5.winners.1.description"),
            devpostlink:
              "https://devpost.com/software/hear-generating-subtitles-for-life",
            youtube: "https://youtu.be/vE7q2J6y1Fg",
          },
          {
            position: "2",
            team: t("slide5.winners.2.team"),
            project: t("slide5.winners.2.project"),
            description: t("slide5.winners.2.description"),
            devpostlink: "https://devpost.com/software/virtual-fridge-yt7gc4",
          },
          {
            position: "3",
            team: t("slide5.winners.3.team"),
            project: t("slide5.winners.3.project"),
            description: t("slide5.winners.3.description"),
            devpostlink: "https://devpost.com/software/smartrash",
          },
        ],
        tag: t("slide5.tag"),
      },

      // ConUHacks III – The Evolution Continues (2018)
      {
        id: 4,
        image: "/imgs/about_us3.jpg",
        title: t("slide4.title"),
        subtitle: t("slide4.subtitle"),
        stats: {
          Participants: t("slide4.stats.participants"),
          Projects: t("slide4.stats.projects"),
          Mentors: t("slide4.stats.mentors"),
          Sponsors: t("slide4.stats.sponsors"),
        },
        winners: [
          {
            position: "1",
            team: t("slide4.winners.1.team"),
            project: t("slide4.winners.1.project"),
            description: t("slide4.winners.1.description"),
            devpostlink: "https://devpost.com/software/alice-8kyna4",
          },
          {
            position: "2",
            team: t("slide4.winners.2.team"),
            project: t("slide4.winners.2.project"),
            description: t("slide4.winners.2.description"),
            devpostlink: "https://devpost.com/software/elderly-notifications",
            youtube: "https://youtu.be/E5A0DZAkQT0",
          },
          {
            position: "3",
            team: t("slide4.winners.3.team"),
            project: t("slide4.winners.3.project"),
            description: t("slide4.winners.3.description"),
            devpostlink: "https://devpost.com/software/chaperone",
          },
        ],
        tag: t("slide4.tag"),
      },

      // ConUHacks II – The Next Chapter (2017)
      {
        id: 3,
        image: "/imgs/about_us3.jpg",
        title: t("slide3.title"),
        subtitle: t("slide3.subtitle"),
        stats: {
          Participants: t("slide3.stats.participants"),
          Projects: t("slide3.stats.projects"),
          Mentors: t("slide3.stats.mentors"),
          Sponsors: t("slide3.stats.sponsors"),
        },
        winners: [
          {
            position: "1",
            team: t("slide3.winners.1.team"),
            project: t("slide3.winners.1.project"),
            description: t("slide3.winners.1.description"),
            devpostlink: "https://devpost.com/software/conuhacks",
          },
          {
            position: "2",
            team: t("slide3.winners.2.team"),
            project: t("slide3.winners.2.project"),
            description: t("slide3.winners.2.description"),
            devpostlink: "https://devpost.com/software/foody-lfbvrn",
          },
          {
            position: "3",
            team: t("slide3.winners.3.team"),
            project: t("slide3.winners.3.project"),
            description: t("slide3.winners.3.description"),
            devpostlink: "https://devpost.com/software/l2talk",
          },
        ],
        tag: t("slide3.tag"),
      },

      // ConUHacks I – A Journey Begins (2016)
      {
        id: 2,
        image: "/imgs/about_us1.jpg",
        title: t("slide2.title"),
        subtitle: t("slide2.subtitle"),
        stats: {
          Participants: t("slide2.stats.participants"),
          Projects: t("slide2.stats.projects"),
          Mentors: t("slide2.stats.mentors"),
          Sponsors: t("slide2.stats.sponsors"),
        },
        winners: [
          {
            position: "1",
            team: t("slide2.winners.1.team"),
            project: t("slide2.winners.1.project"),
            description: t("slide2.winners.1.description"),
            devpostlink: "https://devpost.com/software/doublevision",
            youtube: "https://youtu.be/kKdxBxN9THQ",
          },
          {
            position: "2",
            team: t("slide2.winners.2.team"),
            project: t("slide2.winners.2.project"),
            description: t("slide2.winners.2.description"),
            devpostlink: "https://devpost.com/software/signspeaks",
          },
          {
            position: "3",
            team: t("slide2.winners.3.team"),
            project: t("slide2.winners.3.project"),
            description: t("slide2.winners.3.description"),
            devpostlink: "https://devpost.com/software/proviralpictures-net",
          },
        ],
        tag: t("slide2.tag"),
      },
    ];

    const [active, setActive] = useState(0);

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
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
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
        className="relative md:h-screen w-full overflow-hidden p-5 max-w-7xl mx-auto"
        id="conuhacks"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0 md:my-20 md:mr-10 max-w-7xl">
          <Image
            src={activeSlide.image}
            alt={activeSlide.title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-700 ease-in-out md:rounded-sm shadow-amber-100"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 md:h-full w-full flex md:px-4 lg:px-10 md:py-25 mx-auto max-w-7xl">
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
                <h2 className="text-lg font-semibold">{t("winnersTitle")}</h2>
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
                          {/* <p className='hover:text-yellow-400'>{winner.team}: {winner.project}</p> */}
                          <p className="hover:text-yellow-500">
                            {winner.project}
                          </p>
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
                          {" "}
                          <FaYoutube className="w-4 h-4 text-red-500" />{" "}
                          <span className="hover:text-red-400 font-semibold">
                            {t("watchDemo")}
                          </span>{" "}
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

        <div className="relative bottom-0 md:absolute md:bottom-70 md:right-10 z-20 flex items-center space-x-4 mt-4">
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
          <div className="z-20 w-[200px] md:w-[320px] h-1 bg-white/20 overflow-hidden">
            <div
              className="md:h-full bg-yellow-400 transition-all duration-300"
              style={{ width: `${(active + 1) * (100 / slides.length)}%` }}
            />
          </div>
          <div className="pr-3">
            <span className="text-white text-sm flex">
              {active + 1 < 10 && <span>0</span>} {active + 1}
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="hidden md:block absolute bottom-10 right-0 z-20">
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
                  <div className="text-xs text-gray-300 text-ellipsis overflow-hidden whitespace-nowrap">
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
