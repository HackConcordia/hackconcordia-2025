'use client';

import Image from 'next/image';
import { faqs } from '../data/faqs.data';


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
            <Image src="/imgs/HC_logo.png" alt="HackConcordia" style={{ objectFit: 'cover' }} width={40} height={40} />
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
