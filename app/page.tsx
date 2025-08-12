'use client';

import { motion, Variants } from 'framer-motion';
import AboutUs from './components/AboutUs';
import ConuHacks from './components/ConuHacks';
import FAQ from './components/Faq';
import TeamMemberSection from './components/TeamMemberSection';
import UpcomingEvents from './components/UpcomingEvents';

export default function HomePage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeRightToLeft: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
  };

  return (
    <>
      {/* Fade Up Sections */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <AboutUs />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <ConuHacks />
      </motion.div>

      {/* Fade Right-to-Left Section */}
      <motion.div variants={fadeRightToLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <UpcomingEvents />
      </motion.div>

      {/* Fade Right-to-Left for Team Section */}
      <motion.div variants={fadeRightToLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <TeamMemberSection />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
        <FAQ />
      </motion.div>

      <br />
    </>
  );
}
