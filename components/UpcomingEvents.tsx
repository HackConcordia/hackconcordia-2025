'use client';
import { useTranslations } from "next-intl";

type Event = {
    id: number;
    date: string;
    month: string;
    year: string;
    title: string;
    type: string;
    time: string;
    location: string;
    address: string;
    highlight?: boolean;
};



export default function UpcomingEvents() {
    const t = useTranslations("UpcomingEvents");

    const events: Event[] = [
    {
        id: 1,
        date: '26',
        month: t("month.August"),
        year: '2025',
        title: t("title.HackDecouverte"),
        type: t("type.MiniHackathon"),
        time: t("time.7_30PM_10PM"),
        location: t("location.HBuilding"),
        address: t("address.ConcordiaAddress"),
        highlight: true,
    },
    {
        id: 2,
        date: '02',
        month: t('month.September'),
        year: '2025',
        title: t('title.GitHubCoPilot'),
        type: t('type.Workshop'),
        time: t('time.10_30AM_1PM'),
        location: t('location.HBuilding'),
        address: t('address.ConcordiaAddress'),
    },
    {
        id: 3,
        date: '12',
        month: t('month.October'),
        year: '2025',
        title: t('title.FullStackDeveloper101'),
        type: t('type.Workshop'),
        time: t('time.10_30AM_1PM'),
        location: t('location.HBuilding'),
        address: t('address.ConcordiaAddress'),
    },
    {
        id: 4,
        date: '25',
        month: t('month.November'),
        year: '2025',
        title: t('title.HackDecouverte'),
        type: t('type.MiniHackathon'),
        time: t('time.7_30PM_10PM'),
        location: t('location.HBuilding'),
        address: t('address.ConcordiaAddress'),
    },
    {
        id: 5,
        date: '30',
        month: t('month.November'),
        year: '2025',
        title: t('title.GitHubCoPilot'),
        type: t('type.Workshop'),
        time: t('time.10_30AM_1PM'),
        location: t('location.HBuilding'),
        address: t('address.ConcordiaAddress'),
    },
    // WINTER 2026
    {
        id: 6,
        date: '25',
        month: t('month.December'),
        year: '2025',
        title: t('title.FullStackDeveloper101'),
        type: t('type.Workshop'),
        time: t('time.10_30AM_1PM'),
        location: t('location.HBuilding'),
        address: t('address.ConcordiaAddress'),
    },
    ];

    return (
        <section className="relative z-10 w-screen flex flex-col justify-center max-w-7xl mx-auto p-4 md:p-0" id="events">
            <h2 className="text-4xl font-bold text-yellow-400 mb-2 mt-20">
                {t("title1")}
            </h2>
            <p className="text-gray-400 mb-4">
                {t("subtitle1")}
            </p>

            {/* Scroll wrapper */}
            <div className="group relative w-full overflow-hidden">
                <div className="flex gap-6 overflow-x-auto scroll-smooth transition-all duration-300 group-hover:scrollbar-thin group-hover:scrollbar-thumb-gray-600 group-hover:scrollbar-track-transparent py-4 pl-2">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className={`rounded-md p-8 w-[330px] border-2 shrink-0 transition-colors duration-300 relative overflow-hidden
                                ${event.highlight
                                    ? 'backdrop-blur-xs text-white border-yellow-500 pulse-scale'
                                    : 'backdrop-blur-xs text-white border-zinc-900'
                                }`}
                        >
                            <div className="text-5xl font-extrabold leading-none text-yellow-500">
                                {event.date}
                            </div>
                            <div className="text-lg font-semibold mt-1">
                                {event.month}, {event.year}
                            </div>

                            <div className="mt-2 text-yellow-500">
                                <h3 className="text-xl font-bold">{event.title}</h3>
                                <p
                                    className={`${event.highlight ? 'text-gray-400' : 'text-gray-400'
                                        } font-medium text-sm`}
                                >
                                    {event.type}
                                </p>
                            </div>

                            <div className="mt-12 text-sm leading-relaxed">
                                <p className="font-semibold">{event.time}</p>
                                <p>{event.location}</p>
                                <p className="text-gray-400 text-xs">{event.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
