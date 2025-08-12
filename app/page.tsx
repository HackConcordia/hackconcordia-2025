'use client';

import { motion, Variants } from 'framer-motion';
import AboutUs from './components/AboutUs';
import ConuHacks from './components/ConuHacks';
import FAQ from './components/Faq';
import TeamMemberSection from './components/TeamMemberSection';
import UpcomingEvents from './components/UpcomingEvents';
import { useLayoutEffect, useEffect } from 'react';

export default function HomePage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.4 } },
  };

  // Scroll to top before browser paints
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Disable browser automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const Section = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );

  return (
    <>
      <Section><AboutUs /></Section>
      <Section><ConuHacks /></Section>
      <Section><UpcomingEvents /></Section>
      <Section><TeamMemberSection /></Section>
      <Section><FAQ /></Section>
      <br />
    </>
  );
}
