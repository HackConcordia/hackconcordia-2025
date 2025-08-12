import { JSX } from 'react';
import {
    FaClipboardList,
    FaMoneyBillAlt,
    FaCogs,
    FaReceipt,
    FaUser,
    FaLaptopCode,
    FaUsers,
    FaUtensils,
    FaEnvelope
} from 'react-icons/fa';


type FAQItem = {
    question: string;
    answer: string;
    icon: JSX.Element;
};

export const faqs: FAQItem[] = [
    {
        question: 'What is ConUHacks & who organizes it?',
        answer: 'ConUHacks (hosted by HackConcordia at Concordia University) is Quebec’s largest 24‑hour student hackathon. Teams build software or hardware projects using emerging tech like AI and IoT, and demo them live to judges.',
        icon: <FaLaptopCode className="text-sm md:text-xl" />,
    },
    {
        question: 'Who can participate (eligibility)?',
        answer: 'Anyone above the legal age of majority—high school senior to university student is welcome. Recent graduates and international students can participate too; proof of enrollment may be required.',
        icon: <FaUsers className="text-sm md:text-xl" />,
    },
    {
        question: 'Do I need a team?',
        answer: 'Yes—each team can have up to 4 members. If you register solo, you’ll be listed as “Looking for Teammates”, and organizers’ll help you join a team.',
        icon: <FaUsers className="text-sm md:text-xl" />,
    },
    {
        question: 'I’m not a coder—can I still hack?',
        answer: 'Absolutely! ConUHacks welcomes newcomers—electricians, artists, designers, business majors—you name it. Our mentor teams help turn ideas into demos.',
        icon: <FaUser className="text-sm md:text-xl" />,
    },
    {
        question: 'Is there a registration fee?',
        answer: 'No - ConUHacks is completely free, with food, swag, and workshops included.',
        icon: <FaMoneyBillAlt className="text-sm md:text-xl" />,
    },
    {
        question: 'Are meals, hardware, or Wi‑Fi provided?',
        answer: 'Yes! Free catered meals, snacks, and drinks are provided. There’s also a fully-equipped hardware lab with equipment and tools, plus on-site Wi‑Fi.',
        icon: <FaUtensils className="text-sm md:text-xl" />,
    },
    {
        question: 'What prizes can we win?',
        answer: 'ConUHacks typically offers prizes worth over $6 000‑$17 000 CAD—including PS5s, VR gear, Oculus headsets, gaming monitors, Amazon gift cards, plus MLH winner ribbons and interview fast‑track interviews.',
        icon: <FaReceipt className="text-sm md:text-xl" />,
    },
    {
        question: 'How do I submit my project and what are judging criteria?',
        answer: 'Submit via Devpost before the deadline. Judges score based on working demo, presentation, UI/UX, creativity, and impact.',
        icon: <FaClipboardList className="text-sm md:text-xl" />,
    },
    {
        question: 'Is there a code of conduct?',
        answer: 'Yes—ConUHacks uses Major League Hacking’s code of conduct: inclusive and respectful community only, zero tolerance for harassment.',
        icon: <FaCogs className="text-sm md:text-xl" />,
    },
    {
        question: 'How can I get help if I have questions or concerns?',
        answer: 'During the event, visit the info booth or raise issues via Discord. For post‑event inquiries or concerns, email the hackathon manager (listed on Devpost).',
        icon: <FaEnvelope className="text-sm md:text-xl" />,
    },
];