import { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { TranslationObject } from './translationObject.data';

export const getNavLinks = (t: TranslationObject): { href: string; label: string }[] => [
    { href: '#home', label: t.Header.home },
    { href: '#conuhacks', label: t.Header.conuhacks },
    // { href: '#events', label: t.Header.events },
    { href: '#team', label: t.Header.team },
    { href: '#faq', label: t.Header.faq },
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
