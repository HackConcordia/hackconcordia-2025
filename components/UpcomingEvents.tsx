"use client";
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
    // FALL 2025
    {
      id: 1,
      date: "12",
      month: t("month.September"),
      year: "2025",
      title: t("title.HackDecouverte"),
      type: t("type.MiniHackathon"),
      time: t("time.full_day"),
      location: t("location.Conco"),
      address: t("address.ConcordiaAddress"),
      highlight: true,
    },
    {
      id: 2,
      date: "30",
      month: t("month.September"),
      year: "2025",
      title: t("title.Lizard_Lounge"),
      type: t("type.Mixer"),
      time: t("time.evening"),
      location: t("location.Reggies"),
      address: t("address.Conco"),
    },
    {
      id: 3,
      date: "15",
      month: t("month.November"),
      year: "2025",
      title: t("title.ConUHacks_X_Launch_Party"), // You'll want to add this key to your JSON
      type: t("type.Registration_Launch_Event"), // Also add this key in JSON
      time: t("time.evening"), // or customize as needed
      location: t("location.Reggies"),
      address: t("address.Conco"),
    },
    {
      id: 4,
      date: "22",
      month: t("month.November"),
      year: "2025",
      title: t("title.Workshop_1"),
      type: t("type.Workshop"),
      time: t("time.5_30pm_7_30_pm"),
      location: t("location.hall_1011"),
      address: t("address.Conco"),
    },
    {
      id: 5,
      date: "30",
      month: t("month.November"),
      year: "2025",
      title: t("title.Workshop_2"),
      type: t("type.Workshop"),
      time: t("time.5_30pm_7_30_pm"),
      location: t("location.hall_1011"),
      address: t("address.Conco"),
    },
    // WINTER 2026
    {
      id: 6,
      date: "24",
      month: t("month.January"),
      year: "2026",
      title: "ConUHacks X",
      type: t("type.Hackathon"),
      time: t("time.conuhacks"),
      location: t("location.jmsb"),
      address: t("address.jmsb"),
    },
    {
      id: 7,
      date: "01",
      month: t("month.February"),
      year: "2026",
      title: t("title.Lightning_Learning"),
      type: t("type.Tech_Social"),
      time: t("time.5_30pm_7_30_pm"),
      location: "tbd",
      address: t("address.Conco"),
    },
    {
      id: 8,
      date: "07",
      month: t("month.February"),
      year: "2026",
      title: t("title.Wine_Cheese_Mixer"),
      type: t("type.Social_Mixer"),
      time: t("time.5_30pm_7_30_pm"),
      location: "tbd",
      address: t("address.Conco"),
    },
    {
      id: 9,
      date: "22",
      month: t("month.March"),
      year: "2026",
      title: t("title.Workshop1_Winter"),
      type: t("type.Workshop"),
      time: t("time.5_30pm_7_30_pm"),
      location: t("location.hall_1011"),
      address: t("address.Conco"),
    },
    {
      id: 10,
      date: "05",
      month: t("month.April"),
      year: "2026",
      title: t("title.Workshop2_Winter"),
      type: t("type.Workshop"),
      time: t("time.5_30pm_7_30_pm"),
      location: t("location.hall_1011"),
      address: t("address.Conco"),
    },
  ];

  return (
    <section
      className="relative z-10 w-screen flex flex-col justify-center max-w-7xl mx-auto p-4 md:p-0"
      id="events"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2 md:mt-20">
        {t("title1")}
      </h2>
      <p className="text-gray-400 mb-4">{t("subtitle1")}</p>

      {/* Scroll wrapper */}
      <div className="group relative w-full overflow-hidden">
        <div className="flex gap-6 overflow-x-auto scroll-smooth transition-all duration-300 group-hover:scrollbar-thin group-hover:scrollbar-thumb-gray-600 group-hover:scrollbar-track-transparent py-4 pl-2">
          {events.map((event) => (
            <div
              key={event.id}
              className={`rounded-md p-8 w-[330px] border-2 shrink-0 transition-colors duration-300 relative overflow-hidden
                                ${
                                  event.highlight
                                    ? "backdrop-blur-xs text-white border-yellow-500 pulse-scale"
                                    : "backdrop-blur-xs text-white border-zinc-900"
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
                  className={`${
                    event.highlight ? "text-gray-400" : "text-gray-400"
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
