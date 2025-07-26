'use client';

import { JSX } from 'react';
import { FaMoneyBillAlt, FaEnvelope, FaUser, FaQuestionCircle, FaClipboardList, FaReceipt, FaCogs, FaComments } from 'react-icons/fa';

type FAQItem = {
    question: string;
    answer: string;
    icon: JSX.Element;
};

const faqs: FAQItem[] = [
    {
        question: 'Is there a free trial available?',
        answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running.',
        icon: <FaQuestionCircle className="text-xl" />,
    },
    {
        question: 'What is your cancellation policy?',
        answer: 'We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.',
        icon: <FaClipboardList className="text-xl" />,
    },
    {
        question: 'How does billing work?',
        answer: 'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.',
        icon: <FaMoneyBillAlt className="text-xl" />,
    },
    {
        question: 'How does support work?',
        answer: 'If you’re having trouble with Untitled UI, we’re here to try and help via hello@untitledui.com. We’re a small team, but will get back to you soon.',
        icon: <FaComments className="text-xl" />,
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.',
        icon: <FaCogs className="text-xl" />,
    },
    {
        question: 'Can other info be added to an invoice?',
        answer: 'At the moment, the only way to add additional information to invoices is to add the information to the workspace’s name manually.',
        icon: <FaReceipt className="text-xl" />,
    },
    {
        question: 'How do I change my account email?',
        answer: 'You can change the email address associated with your account by going to untitledui.com/account from a laptop or desktop.',
        icon: <FaEnvelope className="text-xl" />,
    },
    {
        question: 'Do you provide tutorials?',
        answer: 'Not yet, but we’re working on it! In the meantime, we’ve done our best to make it intuitive and we’re building our documentation page.',
        icon: <FaUser className="text-xl" />,
    },
];

export default function FAQ() {
    return (
        <section className="relative z-10 w-screen text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-4 md:mb-0">
                        Bee Curious?
                    </h2>
                    <a
                        href="#"
                        className="text-sm font-medium border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                    >
                        Contact Us ↗
                    </a>
                </div>

                <p className="text-gray-400 mb-10 max-w-2xl">
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
                <div className="mt-16 border border-zinc-700 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Support"
                            className="w-10 h-10 rounded-full"
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
                        href="#"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </section>
    );
}
