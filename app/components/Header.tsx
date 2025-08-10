'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaRegEnvelope,
} from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#conuhacks', label: 'ConuHacks' },
    { href: '#events', label: 'Events' },
    { href: '#team', label: 'Team' },
    { href: '#faq', label: 'FAQ' },
];

const pageToSectionMap: Record<string, string> = {
    '/legacy-teams': 'team',
    '/contact-us': 'faq',
};

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('home');
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const mappedSection = pageToSectionMap[pathname];
        if (mappedSection) {
            setActiveSection(mappedSection);
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    if (sectionId) {
                        setActiveSection(sectionId);
                    }
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [pathname]);

    useEffect(() => {
        if (activeSection && pathname === '/') {
            history.replaceState(null, '', `#${activeSection}`);
        }
    }, [activeSection, pathname]);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const sectionId = href.replace('#', '');

        if (pathname !== '/') {
            router.push(`/${href}`);
            return;
        }

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            history.replaceState(null, '', href);
            setActiveSection(sectionId);
        }
    };

    return (
        <header className="w-full fixed top-0 z-50 text-white backdrop-blur-xs bg-black/60 px-4 md:px-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
                {/* Left Logo */}
                <div className="flex items-center space-x-2" style={{ marginLeft: '-2px' }}>
                    <Image src="/imgs/HC_logo.png" alt="Logo" width={40} height={40} />
                    <div className="text-xl font-bold">HackConcordia</div>
                </div>

                {/* Middle Navigation (hidden on small screens) */}
                <nav className="hidden md:flex space-x-6 text-sm md:text-base">
                    {navLinks.map(({ href, label }) => {
                        const sectionId = href.replace('#', '');
                        const isActive = activeSection === sectionId;

                        return (
                            <a
                                key={href}
                                href={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className={clsx(
                                    'transition-colors hover:text-yellow-400',
                                    isActive && 'text-yellow-400'
                                )}
                            >
                                {label}
                            </a>
                        );
                    })}
                </nav>

                {/* Right Icons (hidden on small screens) */}
                <div className="flex space-x-2 md:space-x-4 items-center">
                    <a className="hover:text-yellow-400" href="https://www.facebook.com/HackConcordia/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF size={18} />
                    </a>
                    <a className="hover:text-yellow-400" href="https://www.instagram.com/hackconcordia" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={18} />
                    </a>
                    <a className="hover:text-yellow-400" href="https://www.linkedin.com/company/hackconcordia" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size={18} />
                    </a>
                    <a className="hover:text-yellow-400" href="https://x.com/HackConcordia" target="_blank" rel="noopener noreferrer">
                        <FaX size={18} />
                    </a>
                    <a className="hover:text-yellow-400" href="mailto:technology.hackconcordia@ecaconcordia.ca">
                        <FaRegEnvelope size={18} />
                    </a>
                </div>
            </div>
        </header>
    );
}
