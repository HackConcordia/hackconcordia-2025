'use client';

import { motion, Variants } from 'framer-motion';
import { FaClipboardList, FaEnvelope, FaHandshake } from "react-icons/fa";
import BeeCursor from "../components/FloatingBeeCursor";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

export default function ContactSection() {
  return (
    <>
      <BeeCursor />
      <section
        id="contact"
        className="w-full z-10 relative flex flex-col justify-center items-center p-4"
      >
        {/* ONE BIG CONTAINER FOR BOTH SECTIONS */}
        <motion.div
          className="flex flex-col w-screen max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Contact Us Section */}
          <motion.div
            className="backdrop-blur-xs text-white md:text-center py-8 md:py-16 flex flex-col px-4"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-yellow-400"
            >
              Contact Us
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-sm md:text-sm text-gray-200"
            >
              Have questions about HackConcordia or ConuHacks? Want to be a sponsor? Want to be a judge?
              <br />
              Reach out to us and we will get back to you.
            </motion.p>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div
            className="space-y-10 px-4 md:px-0"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-white bg-clip-text mb-2"
            >
              Get in Touch
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-200"
            >
              We would love to hear from you! Whether you have questions about the hackathon, want to be a sponsor or a judge for submissions, or have any other inquiries, please do not hesitate to reach out.
            </motion.p>

            {/* Contact Items */}
            <motion.div className="space-y-8 flex flex-col">
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-yellow-200/10 border-2 border-yellow-300/20 p-3 rounded-xl">
                  <FaEnvelope className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:technology.hackconcordia@ecaconcordia.ca">
                    <p className="text-sm text-gray-500">
                      technology.hackconcordia@ecaconcordia.ca
                    </p>
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-yellow-200/10 border-2 border-yellow-300/20 p-3 rounded-xl">
                  <FaHandshake className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Interested in becoming a Sponsor?
                  </p>
                  <p className="text-sm text-gray-500">
                    We are looking for sponsors to help make Conuhacks a success.
                    If you are interested in sponsoring, please email us with{" "}
                    <strong>Sponsorship Interest</strong> in the subject line.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
              >
                <div className="bg-yellow-200/10 border-2 border-yellow-300/20 p-3 rounded-xl">
                  <FaClipboardList className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Interested in Judging?
                  </p>
                  <p className="text-sm text-gray-500">
                    We are looking for industry professionals and educators to
                    help judge hackathon submissions. Please email us with{" "}
                    <strong>Judging Interest</strong> in the subject line.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
