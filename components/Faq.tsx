'use client';

import Image from 'next/image';
import { JSX } from 'react';
import { FaMoneyBillAlt, FaEnvelope, FaUser, FaQuestionCircle, FaClipboardList, FaReceipt, FaCogs, FaComments } from 'react-icons/fa';
import { useTranslations } from "next-intl";

type FAQItem = {
    question: string;
    answer: string;
    icon: JSX.Element;
};



export default function FAQ() {
    const t = useTranslations("Faq");

    const faqs: FAQItem[] = [
    {
      question: t('question.freeTrial'),
      answer: t('answer.freeTrial'),
      icon: <FaQuestionCircle className="text-xl" />,
    },
    {
      question: t('question.cancellationPolicy'),
      answer: t('answer.cancellationPolicy'),
      icon: <FaClipboardList className="text-xl" />,
    },
    {
      question: t('question.billing'),
      answer: t('answer.billing'),
      icon: <FaMoneyBillAlt className="text-xl" />,
    },
    {
      question: t('question.support'),
      answer: t('answer.support'),
      icon: <FaComments className="text-xl" />,
    },
    {
      question: t('question.changePlan'),
      answer: t('answer.changePlan'),
      icon: <FaCogs className="text-xl" />,
    },
    {
      question: t('question.invoiceInfo'),
      answer: t('answer.invoiceInfo'),
      icon: <FaReceipt className="text-xl" />,
    },
    {
      question: t('question.changeEmail'),
      answer: t('answer.changeEmail'),
      icon: <FaEnvelope className="text-xl" />,
    },
    {
      question: t('question.tutorials'),
      answer: t('answer.tutorials'),
      icon: <FaUser className="text-xl" />,
    },
  ];


    return (
        <section className="relative z-10 w-screen text-white py-20 px-4 sm:px-6 lg:px-8" id="faq">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-4xl font-bold text-yellow-400 md:mb-0">
                        {t("title1")}
                    </h2>
                    <a
                        href="contact-us"
                        className="text-sm font-medium border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                    >
                        Contact Us ↗
                    </a>
                </div>

                <p className="text-gray-400 mb-10">
                    Quick answers to questions you may have. Can’t find what you’re looking for? Check out our{' '}
                    <a href="#" className="underline hover:text-white transition">full documentation</a>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-white text-black shrink-0">
                                {faq.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">{faq.question}</h3>
                                <p className="text-sm text-gray-400">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-16 border border-zinc-700 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 backdrop-blur-xs">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/imgs/HC_logo.png"
                            alt="Support"
                            width={40}
                            height={40}
                        />
                        <div>
                            <p className="font-semibold">Still have questions?</p>
                            <p className="text-sm text-gray-400">
                                Can’t find the answer you’re looking for? Please{' '}
                                <a href="#" className="underline text-blue-400">chat to our friendly team</a>.
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
