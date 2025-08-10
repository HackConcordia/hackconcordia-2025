'use client';

import Image from 'next/image';
import { JSX } from 'react';
import { useTranslations } from "next-intl";
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



export default function FAQ() {
  const t = useTranslations("faqs");
  const faqs = [
    {
      question: t("questions.question1"),
      answer: t("questions.answer1"),
      icon: <FaLaptopCode className="text-sm md:text-xl" />,
    },
    {
      question: t("questions.question2"),
      answer: t("questions.answer2"),
      icon: <FaUsers className="text-sm md:text-xl" />,
    },
    {
      question: t("questions.question3"),
      answer: t("questions.answer3"),
      icon: <FaUsers className="text-sm md:text-xl" />,
    },
    {
      question: t("questions.question4"),
      answer: t("questions.answer4"),
      icon: <FaUser className="text-sm md:text-xl" />,
    },
    {
      question: t("questions.question5"),
      answer: t("questions.answer5"),
      icon: <FaMoneyBillAlt className="text-sm md:text-xl" />,
    },
    {
      question: t("questions.question6"),
      answer: t("questions.answer6"),
      icon: <FaUtensils className="text-sm md:text-xl" />,
    },
    {
      question: t("questions.question7"),
      answer: t("questions.answer7"),
      icon: <FaReceipt className="text-sm md:text-xl" />,
    },
    {
      question: t("questions.question8"),
      answer: t("questions.answer8"),
      icon: <FaClipboardList className="text-sm md:text-xl" />,
    },
    {
      question: t("questions.question9"),
      answer: t("questions.answer9"),
      icon: <FaCogs className="text-sm md:text-xl" />,
    },
    {
      question: t("questions.question10"),
      answer: t("questions.answer10"),
      icon: <FaEnvelope className="text-sm md:text-xl" />,
    },
  ];
  return (
    <section
      className="relative z-10 w-full text-white py-20 px-4 sm:px-6 lg:px-8"
      id="faq"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-row md:items-center justify-between mb-4 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
            {t("heading")}
          </h2>
          <a
            href="contact-us"
            className="text-xs md:text-sm font-medium border border-white px-4 py-2 rounded-sm hover:bg-white hover:text-black transition w-fit"
          >
            {t("contactUs")} ↗
          </a>
        </div>

        <p className="text-gray-400 mb-10 text-xs sm:text-base">
          {t("description")}
        </p>

        {/* FAQ List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="p-2 md:p-3 rounded-full bg-white text-black shrink-0">
                {faq.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-sm md:text-base">
                  {faq.question}
                </h3>
                <p className="text-xs md:text-sm text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 border border-zinc-700 rounded-lg p-3 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 backdrop-blur-xs">
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/imgs/HC_logo.png"
              alt="HackConcordia"
              width={40}
              height={40}
            />
            <div>
              <p className="text-sm md:text-base font-semibold">
                {t("more_questions")}
              </p>
              <p className="text-xs md:text-sm text-gray-400">
                {t("reach_out")}
              </p>
            </div>
          </div>
          <a
            href="contact-us"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-sm text-xs md:text-sm font-medium transition w-fit ml-11"
          >
            {t("get_intouch_button")}
          </a>
        </div>
      </div>
    </section>
  );
}
