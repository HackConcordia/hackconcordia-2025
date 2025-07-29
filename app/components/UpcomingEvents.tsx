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
    {
        id: 1,
        date: '26',
        month: 'August',
        year: '2025',
        title: 'HackDecouverte',
        type: 'Mini-Hackathon',
        time: '7:30PM - 10PM',
        location: '@H Building Concordia University',
        address: '1455 Blvd. De Maisonneuve Ouest, Montreal',
        highlight: true,
    },
    {
        id: 2,
        date: '02',
        month: 'September',
        year: '2025',
        title: 'GitHub Co-pilot',
        type: 'Workshop',
        time: '10:30AM - 1PM',
        location: '@H Building Concordia University',
        address: '1455 Blvd. De Maisonneuve Ouest, Montreal',
    },
    {
        id: 3,
        date: '12',
        month: 'October',
        year: '2025',
        title: 'Full-Stack Developer 101',
        type: 'Workshop',
        time: '10:30AM - 1PM',
        location: '@H Building Concordia University',
        address: '1455 Blvd. De Maisonneuve Ouest, Montreal',
    },
    {
        id: 4,
        date: '25',
        month: 'November',
        year: '2025',
        title: 'HackDecouverte',
        type: 'Mini-Hackathon',
        time: '7:30PM - 10PM',
        location: '@H Building Concordia University',
        address: '1455 Blvd. De Maisonneuve Ouest, Montreal',
    },
    {
        id: 5,
        date: '30',
        month: 'November',
        year: '2025',
        title: 'GitHub Co-pilot',
        type: 'Workshop',
        time: '10:30AM - 1PM',
        location: '@H Building Concordia University',
        address: '1455 Blvd. De Maisonneuve Ouest, Montreal',
    },
    {
        id: 6,
        date: '25',
        month: 'December',
        year: '2025',
        title: 'Full-Stack Developer 101',
        type: 'Workshop',
        time: '10:30AM - 1PM',
        location: '@H Building Concordia University',
        address: '1455 Blvd. De Maisonneuve Ouest, Montreal',
    },
];

export default function UpcomingEvents() {
    return (
        <section className="relative z-10 w-screen flex flex-col justify-center max-w-7xl mx-auto" id="events">
            <h2 className="text-4xl font-bold text-yellow-400 mb-2">
                Bee Ready...
            </h2>
            <p className="text-gray-400 mb-4">
                Below is a list of our upcoming events. Click below to register.
            </p>

            {/* Scroll wrapper */}
            <div className="group relative w-full overflow-hidden">
                <div className="flex gap-6 overflow-x-auto scroll-smooth transition-all duration-300 group-hover:scrollbar-thin group-hover:scrollbar-thumb-gray-600 group-hover:scrollbar-track-transparent py-4">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className={`rounded-md p-8 min-w-[300px] sm:min-w-[300px] border-2 shrink-0 transition-colors duration-300 ${event.highlight
                                    ? 'backdrop-blur-xs text-white border-yellow-500'
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
                                        } font-medium`}
                                >
                                    {event.type}
                                </p>
                            </div>

                            <div className="mt-12 text-sm leading-relaxed">
                                <p className="font-semibold">{event.time}</p>
                                <p>{event.location}</p>
                                <p className="text-gray-400">{event.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
