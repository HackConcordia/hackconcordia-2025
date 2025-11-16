import { TranslationObject } from "./translationObject.data";

export type Event = {
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
    link?: string;
};

export const getUpcomingEvents = (t: TranslationObject): Event[] => [
    // FALL 2025
    {
        id: 1,
        date: '20',
        month: t.UpcomingEvents.months.November,
        year: '2025',
        title: t.UpcomingEvents.events[5].title,
        type: t.UpcomingEvents.events[5].type,
        time: t.UpcomingEvents.time.evening + " (4PM - 7PM)",
        location: t.UpcomingEvents.address.floor,
        address: t.UpcomingEvents.address.hallBuilding,
        highlight: true,
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfnnr7LN7wHafxCDVz_6W5TiBhbtWlpEGRQwEEmi-V7TrzVwQ/viewform",
    },
    {
        id: 2,
        date: '29',
        month: t.UpcomingEvents.months.November,
        year: '2025',
        title: 'HackDécouverte',
        type: 'Mini‑Hackathon',
        time: t.UpcomingEvents.time.fullDay,
        location: t.UpcomingEvents.address.concordia,
        address: t.UpcomingEvents.address.sgw,
        link: "https://www.hackdecouverte.io/",
    },
    // {
    //     id: 4,
    //     date: '22',
    //     month: t.UpcomingEvents.months.November,
    //     year: '2025',
    //     title: t.UpcomingEvents.events[4].title,
    //     type: t.UpcomingEvents.events[4].type,
    //     time: t.UpcomingEvents.time.eveningTime,
    //     location: t.UpcomingEvents.address.hall,
    //     address: t.UpcomingEvents.address.concordia_address,
    // },
    // // WINTER 2026
    {
        id: 3,
        date: '19',
        month: t.UpcomingEvents.months.January,
        year: '2026',
        title: t.UpcomingEvents.events[11].title,
        type: t.UpcomingEvents.events[11].type,
        time: t.UpcomingEvents.time.hackWeekDays,
        location: t.UpcomingEvents.address.jmsb,
        address: t.UpcomingEvents.address.jmsb_address,
    },
    {
        id: 4,
        date: '24',
        month: t.UpcomingEvents.months.January,
        year: '2026',
        title: t.UpcomingEvents.events[6].title,
        type: t.UpcomingEvents.events[6].type,
        time: t.UpcomingEvents.time.conuhacksDays,
        location: t.UpcomingEvents.address.jmsb,
        address: t.UpcomingEvents.address.jmsb_address,
        link: "http://conuhacks.io/",
    },
    // {
    //     id: 7,
    //     date: '01',
    //     month: t.UpcomingEvents.months.February,
    //     year: '2026',
    //     title: t.UpcomingEvents.events[7].title,
    //     type: t.UpcomingEvents.events[7].type,
    //     time: t.UpcomingEvents.time.eveningTime,
    //     location: t.UpcomingEvents.address.tbd,
    //     address: t.UpcomingEvents.address.concordia_address,
    // },
    // {
    //     id: 8,
    //     date: '07',
    //     month: t.UpcomingEvents.months.February,
    //     year: '2026',
    //     title: t.UpcomingEvents.events[8].title,
    //     type: t.UpcomingEvents.events[8].type,
    //     time: t.UpcomingEvents.time.eveningTime,
    //     location: t.UpcomingEvents.address.tbd,
    //     address: t.UpcomingEvents.address.concordia_address,
    // },
    // {
    //     id: 9,
    //     date: '22',
    //     month: t.UpcomingEvents.months.March,
    //     year: '2026',
    //     title: t.UpcomingEvents.events[9].title,
    //     type: t.UpcomingEvents.events[9].type,
    //     time: t.UpcomingEvents.time.eveningTime,
    //     location: t.UpcomingEvents.address.hall,
    //     address: t.UpcomingEvents.address.concordia_address,
    // },
    // {
    //     id: 10,
    //     date: '05',
    //     month: t.UpcomingEvents.months.April,
    //     year: '2026',
    //     title: t.UpcomingEvents.events[10].title,
    //     type: t.UpcomingEvents.events[10].type,
    //     time: t.UpcomingEvents.time.eveningTime,
    //     location: t.UpcomingEvents.address.hall,
    //     address: t.UpcomingEvents.address.concordia_address,
    // },
];
