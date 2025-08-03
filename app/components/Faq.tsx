'use client';

import Image from 'next/image';
import { JSX } from 'react';
import {
  FaQuestionCircle,
  FaClipboardList,
  FaMoneyBillAlt,
  FaComments,
  FaCogs,
  FaReceipt,
  FaUser,
  FaLaptopCode,
  FaUsers,
  FaUtensils,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';


type FAQItem = {
    question: string;
    answer: string;
    icon: JSX.Element;
};

const faqs: FAQItem[] = [
  {
    question: 'What is ConUHacks & who organizes it?',
    answer: 'ConUHacks (hosted by HackConcordia at Concordia University) is Quebec’s largest 24‑hour student hackathon. Teams build software or hardware projects using emerging tech like AI and IoT, and demo them live to judges.',
    icon: <FaLaptopCode className="text-xl" />,
  },
  {
    question: 'Who can participate (eligibility)?',
    answer: 'Anyone above the legal age of majority—high school senior to university student is welcome. Recent graduates and international students can participate too; proof of enrollment may be required.',
    icon: <FaUsers className="text-xl" />,
  },
  {
    question: 'Do I need a team?',
    answer: 'Yes—each team can have up to 4 members. If you register solo, you’ll be listed as “Looking for Teammates”, and organizers’ll help you join a team.',
    icon: <FaUsers className="text-xl" />,
  },
  {
    question: 'I’m not a coder—can I still hack?',
    answer: 'Absolutely! ConUHacks welcomes newcomers—electricians, artists, designers, business majors—you name it. Our mentor teams help turn ideas into demos.',
    icon: <FaUser className="text-xl" />,
  },
  {
    question: 'Is there a registration fee?',
    answer: 'No - ConUHacks is completely free, with food, swag, and workshops included.',
    icon: <FaMoneyBillAlt className="text-xl" />,
  },
  {
    question: 'Are meals, hardware, or Wi‑Fi provided?',
    answer: 'Yes! Free catered meals, snacks, and drinks are provided. There’s also a fully-equipped hardware lab with equipment and tools, plus on-site Wi‑Fi.',
    icon: <FaUtensils className="text-xl" />,
  },
  {
    question: 'What prizes can we win?',
    answer: 'ConUHacks typically offers prizes worth over $6 000‑$17 000 CAD—including PS5s, VR gear, Oculus headsets, gaming monitors, Amazon gift cards, plus MLH winner ribbons and interview fast‑track interviews.',
    icon: <FaReceipt className="text-xl" />,
  },
  {
    question: 'How do I submit my project and what are judging criteria?',
    answer: 'Submit via Devpost before the deadline. Judges score based on working demo, presentation, UI/UX, creativity, and impact.',
    icon: <FaClipboardList className="text-xl" />,
  },
  {
    question: 'Is there a code of conduct?',
    answer: 'Yes—ConUHacks uses Major League Hacking’s code of conduct: inclusive and respectful community only, zero tolerance for harassment.',
    icon: <FaCogs className="text-xl" />,
  },
  {
    question: 'How can I get help if I have questions or concerns?',
    answer: 'During the event, visit the info booth or raise issues via Discord. For post‑event inquiries or concerns, email the hackathon manager (listed on Devpost).',
    icon: <FaEnvelope className="text-xl" />,
  },
];


export default function FAQ() {
    return (
        <section className="relative z-10 w-screen text-white py-20 px-4 sm:px-6 lg:px-8" id="faq">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h2 className="text-4xl font-bold text-yellow-400 md:mb-0">
                        Bee Curious?
                    </h2>
                    <a
                        href="contact-us"
                        className="text-sm font-medium border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                    >
                        Contact Us ↗
                    </a>
                </div>

                <p className="text-gray-400 mb-8 text-sm">
                    Find answers to questions about HackConcordia and ConUHacks. Need more details?
                    Reach out to our team or explore the <a href="https://conuhacks.io/faq" className="underline hover:text-white transition">official FAQ page</a>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-white text-black shrink-0">{faq.icon}</div>
                            <div>
                                <h3 className="font-semibold mb-1">{faq.question}</h3>
                                <p className="text-xs text-gray-400">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-8 border border-zinc-700 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 backdrop-blur-xs">
                    <div className="flex items-center gap-4">
                        <Image src="/imgs/HC_logo.png" alt="HackConcordia" width={40} height={40} />
                        <div>
                            <p className="font-semibold">Still have questions?</p>
                            <p className="text-sm text-gray-400">
                                Reach out via email or follow us on social media @HackConcordia.
                            </p>
                        </div>
                    </div>
                    <a
                        href="contact-us"
                        className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </section>
    );
}
