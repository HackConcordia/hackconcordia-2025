import { JSX } from 'react';
import { TranslationObject } from './translationObject.data';
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

export const getFAQs = (t: TranslationObject): FAQItem[] => [
    {
        question: t.Faq.question.conuhacks,
        answer: t.Faq.answer.conuhacks,
        icon: <FaLaptopCode className="text-sm md:text-xl" />,
    },
    {
        question: t.Faq.question.eligibility,
        answer: t.Faq.answer.eligibility,
        icon: <FaUsers className="text-sm md:text-xl" />,
    },
    {
        question: t.Faq.question.team,
        answer: t.Faq.answer.team,
        icon: <FaUsers className="text-sm md:text-xl" />,
    },
    {
        question: t.Faq.question.coderCan,
        answer: t.Faq.answer.coderCan,
        icon: <FaUser className="text-sm md:text-xl" />,
    },
    {
        question: t.Faq.question.registrationFee,
        answer: t.Faq.answer.registrationFee,
        icon: <FaMoneyBillAlt className="text-sm md:text-xl" />,
    },
    {
        question: t.Faq.question.provided,
        answer: t.Faq.answer.provided,
        icon: <FaUtensils className="text-sm md:text-xl" />,
    },
    {
        question: t.Faq.question.prizes,
        answer: t.Faq.answer.prizes,
        icon: <FaReceipt className="text-sm md:text-xl" />,
    },
    {
        question: t.Faq.question.project,
        answer: t.Faq.answer.project,
        icon: <FaClipboardList className="text-sm md:text-xl" />,
    },
    {
        question: t.Faq.question.codeOfConduct,
        answer: t.Faq.answer.codeOfConduct,
        icon: <FaCogs className="text-sm md:text-xl" />,
    },
    {
        question: t.Faq.question.help,
        answer: t.Faq.answer.help,
        icon: <FaEnvelope className="text-sm md:text-xl" />,
    },
];