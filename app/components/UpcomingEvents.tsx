'use client';

import { events } from '../data/events.data';

export default function UpcomingEvents() {
    return (
        <section className="relative z-10 w-screen flex flex-col justify-center max-w-7xl mx-auto p-4 md:p-0 mt-16">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2 md:mt-20">
                Bee Ready
            </h2>
            <p className="text-gray-400 mb-4">
                Below is a list of our upcoming events. Mark your calendars!
            </p>

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
                                <p className="text-gray-400 font-medium text-sm">{event.type}</p>
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
