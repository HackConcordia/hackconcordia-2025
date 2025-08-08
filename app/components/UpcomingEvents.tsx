'use client';

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

const events: Event[] = [
    // FALL 2025
    {
        id: 1,
        date: '12',
        month: 'September',
        year: '2025',
        title: 'HackDécouverte',
        type: 'Mini‑Hackathon',
        time: 'Full Day',
        location: 'Concordia University',
        address: 'SGW Campus, Montreal',
        highlight: true,
    },
    {
        id: 2,
        date: '30',
        month: 'September',
        year: '2025',
        title: 'Lizard Lounge Social',
        type: 'Mixer',
        time: 'Evening',
        location: 'Reggie’s Bar (SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    {
        id: 3,
        date: '15',
        month: 'November',
        year: '2025',
        title: 'ConUHacks X Launch Party',
        type: 'Registration Launch Event',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'Reggie’s Bar / Terrace (SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    {
        id: 4,
        date: '22',
        month: 'November',
        year: '2025',
        title: 'Workshop 1',
        type: 'Workshop',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'H-1011 (Hall Building, SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    {
        id: 5,
        date: '30',
        month: 'November',
        year: '2025',
        title: 'Workshop 2',
        type: 'Workshop',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'H-1011 (Hall Building, SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    // WINTER 2026
    {
        id: 6,
        date: '24',
        month: 'January',
        year: '2026',
        title: 'ConUHacks X',
        type: '24‑Hour Hackathon',
        time: '8 AM (24th Jan) - 11 AM (25th Jan)',
        location: 'Concordia University (John Molson MB)',
        address: '1455 Boulevard de Maisonneuve, Montreal',
    },
    {
        id: 7,
        date: '01',
        month: 'February',
        year: '2026',
        title: 'Lightning Learning',
        type: 'Tech Social',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'tbd',
        address: 'Concordia University, Montreal',
    },
    {
        id: 8,
        date: '07',
        month: 'February',
        year: '2026',
        title: 'Wine & Cheese Mixer',
        type: 'Social Mixer',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'tbd',
        address: 'Concordia University, Montreal',
    },
    {
        id: 9,
        date: '22',
        month: 'March',
        year: '2026',
        title: 'Workshop 1 (Winter)',
        type: 'Workshop',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'H-1011 (Hall Building, SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    {
        id: 10,
        date: '05',
        month: 'April',
        year: '2026',
        title: 'Workshop 2 (Winter)',
        type: 'Workshop',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'H-1011 (Hall Building, SGW Campus)',
        address: 'Concordia University, Montreal',
    },
];


export default function UpcomingEvents() {
    return (
        <section className="relative z-10 w-screen flex flex-col justify-center max-w-7xl mx-auto p-4 md:p-0" id="events">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2 md:mt-20">
                Bee Ready
            </h2>
            <p className="text-gray-400 mb-4">
                Below is a list of our upcoming events. Mark your calendars!
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
