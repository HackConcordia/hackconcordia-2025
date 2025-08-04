'use client';

import AboutUs from './components/AboutUs';
import ConuHacks from './components/ConuHacks';
import FAQ from './components/Faq';
import TeamMemberSection from './components/TeamMemberSection';
import UpcomingEvents from './components/UpcomingEvents';

export default function HomePage() {
  return (
    <>
      <AboutUs />
      <ConuHacks />
      <UpcomingEvents />
      <TeamMemberSection />
      <FAQ />
      <br/>
    </>
  );
}
