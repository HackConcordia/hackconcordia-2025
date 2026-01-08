'use client';

import { motion, Variants } from 'framer-motion';
import { useLayoutEffect, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Lazy load heavy components
const AboutUs = dynamic(() => import('./components/AboutUs'), {
  loading: () => <div className="min-h-screen" />,
});

const ConuHacks = dynamic(() => import('./components/ConuHacks'), {
  loading: () => <div className="min-h-screen" />,
});

const FAQ = dynamic(() => import('./components/Faq'), {
  loading: () => <div className="min-h-[400px]" />,
});

const TeamMemberSection = dynamic(() => import('./components/TeamMemberSection'), {
  loading: () => <div className="min-h-screen" />,
});

const UpcomingEvents = dynamic(() => import('./components/UpcomingEvents'), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function HomePage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
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

  const Section = ({ children, id }: { children: React.ReactNode, id: string }) => (
    <motion.div
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );

  return (
    <>
      <Section id={'home'}><AboutUs /></Section>
      <Section id={'conuhacks'}><ConuHacks /></Section>
      <Section id={'events'}><UpcomingEvents /></Section>
      <Section id={'team'}><TeamMemberSection /></Section>
      <Section id={'faq'}><FAQ /></Section>
      <br />
    </>
  );
}
