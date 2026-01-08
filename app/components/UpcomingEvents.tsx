'use client';

import { getUpcomingEvents, Event } from '../data/events.data';
import { useTranslation } from '../i18n/TranslationContext';
import en from "../locales/en";
import fr from "../locales/fr";

export default function UpcomingEvents() {
    const { t, language } = useTranslation();

    // Get the upcoming events based on current language
    const currentTranslations = language === 'en' ? en : fr;
    const events: Event[] = getUpcomingEvents(currentTranslations).filter(event => {
        // Filter out past events (simple date comparison)
        const eventDate = new Date(`${event.month} ${event.date}, ${event.year}`);
        const today = new Date();
        return eventDate >= today;
    });
    if (events.length > 0) { 
        events[0].highlight = true;
    } 

    const eventCard = (event: Event) => (<div
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
    </div>)

    return (
        <section className="relative z-10 w-screen flex flex-col justify-center max-w-7xl mx-auto p-4 md:p-0 mt-16">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-2 md:mt-20">
                {t('UpcomingEvents.title')}
            </h2>
            <p className="text-gray-400 mb-4">
                {t('UpcomingEvents.subtitle')}
            </p>

            <div className="group relative w-full overflow-hidden">
                <div className="flex gap-6 overflow-x-auto scroll-smooth transition-all duration-300 group-hover:scrollbar-thin group-hover:scrollbar-thumb-gray-600 group-hover:scrollbar-track-transparent py-4 pl-2">
                    {events.map((event) => (
                        event.link ? 
                        <a key={event.id} href={event.link} target="_blank" rel="noopener noreferrer">
                            {eventCard(event)}
                        </a>
                        :
                        <div key={event.id}>{eventCard(event)}</div>
                    ))}
                </div>
            </div>
        </section>
    );
}
