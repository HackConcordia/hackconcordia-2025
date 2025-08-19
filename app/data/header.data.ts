import { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#conuhacks', label: 'ConuHacks' },
    { href: '#events', label: 'Events' },
    { href: '#team', label: 'Team' },
    { href: '#faq', label: 'FAQ' },
];

export const pageToSectionMap: Record<string, string> = {
    '/legacy-teams': 'team',
    '/contact-us': 'faq',
    '/privacy': 'faq',
    '/sponsors': 'faq',
    '/terms': 'faq',
};

export type SocialLink = {
    href: string;
    icon: IconType;
};

export const socialLinks: SocialLink[] = [
    { href: 'https://www.facebook.com/HackConcordia/', icon: FaFacebookF },
    { href: 'https://www.instagram.com/hackconcordia', icon: FaInstagram },
    { href: 'https://www.linkedin.com/company/hackconcordia', icon: FaLinkedinIn },
    { href: 'https://x.com/HackConcordia', icon: FaX },
    { href: 'mailto:technology.hackconcordia@ecaconcordia.ca', icon: FaRegEnvelope },
];

export const logo = {
    src: '/imgs/HC_logo.png',
    alt: 'Logo',
    width: 40,
    height: 40,
    text: 'HackConcordia',
    hoverColor: 'hover:text-yellow-400',
};
