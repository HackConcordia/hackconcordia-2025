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


export default function FAQ() {
  return (
    <section className="relative z-10 w-full text-white py-20 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-row md:items-center justify-between mb-4 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
            Bee Curious?
          </h2>
          <a
            href="contact-us"
            className="text-xs md:text-sm font-medium border border-white px-4 py-2 rounded-sm hover:bg-white hover:text-black transition w-fit"
          >
            Contact Us ↗
          </a>
        </div>

        <p className="text-gray-400 mb-10 text-xs sm:text-base">
          Find answers to questions about HackConcordia and ConUHacks. Need more details? Reach out to our team to know more.
        </p>

        {/* FAQ List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="p-2 md:p-3 rounded-full bg-white text-black shrink-0">
                {faq.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-sm md:text-base">{faq.question}</h3>
                <p className="text-xs md:text-sm text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 border border-zinc-700 rounded-lg p-3 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 backdrop-blur-xs">
          <div className="flex flex-row items-center gap-4">
            <Image src="/imgs/HC_logo.png" alt="HackConcordia" width={40} height={40} />
            <div>
              <p className="text-sm md:text-base font-semibold">Still have questions?</p>
              <p className="text-xs md:text-sm text-gray-400">
                Reach out via email or follow us on social media @HackConcordia.
              </p>
            </div>
          </div>
          <a
            href="contact-us"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-sm text-xs md:text-sm font-medium transition w-fit ml-11"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>

  );
}
