'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#conuhacks', label: 'ConuHacks' },
    { href: '#events', label: 'Events' },
    { href: '#team', label: 'Team' },
    { href: '#faq', label: 'FAQ' },
];

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
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
    }, []);

    return (
        <header className="w-full fixed top-0 z-50 text-white backdrop-blur-xs bg-black/60">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
                {/* Left Logo */}
                <div className="flex items-center space-x-2">
                    <Image src="/imgs/HC_logo.png" alt="Logo" width={40} height={40} />
                    <div className="text-xl font-bold">HackConcordia</div>
                </div>

                {/* Middle Navigation */}
                <nav className="space-x-6 text-sm md:text-base">
                    {navLinks.map(({ href, label }) => {
                        const sectionId = href.replace('#', '');
                        const isActive = activeSection === sectionId;
                        return (
                            <a
                                key={href}
                                href={href}
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

                {/* Right Icons */}
                <div className="flex space-x-4">
                    <a
                        className="hover:text-yellow-400"
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF size={18} />
                    </a>
                    <a
                        className="hover:text-yellow-400"
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={18} />
                    </a>
                    <a
                        className="hover:text-yellow-400"
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={18} />
                    </a>
                    <a
                        className="hover:text-yellow-400"
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaX size={18} />
                    </a>
                    <a
                        className="hover:text-yellow-400"
                        href="mailto:email@example.com"
                    >
                        <FaEnvelope size={18} />
                    </a>
                </div>
            </div>
        </header>
    );
}
