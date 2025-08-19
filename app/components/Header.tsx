'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {
    navLinks,
    pageToSectionMap,
    socialLinks,
    logo,
} from '../data/header.data';

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('home');
    const pathname = usePathname();
    const router = useRouter();

    const hideLinks = pathname?.startsWith('/verify-email');

    // Observe sections for active link highlighting
    useEffect(() => {
        if (!pathname) return;

        const mappedSection = pageToSectionMap[pathname];
        if (mappedSection) {
            setActiveSection(mappedSection);
            return;
        }

        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.6 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    if (sectionId) setActiveSection(sectionId);
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, [pathname]);

    // Update URL hash on scroll
    useEffect(() => {
        if (activeSection && pathname === '/') {
            history.replaceState(null, '', `#${activeSection}`);
        }
    }, [activeSection, pathname]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const sectionId = href.replace('#', '');

        if (pathname !== '/') {
            router.push(`/${href}`);
            return;
        }

        if (sectionId === 'home') {
            scrollTo(0, 0);
            history.replaceState(null, '', href);
            setActiveSection(sectionId);
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
                {/* Logo */}
                <div className="flex items-center space-x-2" style={{ marginLeft: '-2px' }}>
                    <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
                    <Link href="/#home">
                        <div className={clsx('text-xl font-bold', logo.hoverColor)}>{logo.text}</div>
                    </Link>
                </div>

                {/* Navigation Links */}
                {!hideLinks && (
                    <nav className="hidden md:flex space-x-6 text-sm md:text-base">
                        {navLinks.map(({ href, label }) => {
                            const isActive = activeSection === href.replace('#', '');
                            return (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={(e) => handleNavClick(e, href)}
                                    className={clsx('transition-colors hover:text-yellow-400', isActive && 'text-yellow-400')}
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </nav>
                )}

                {/* Social Icons */}
                <div className="flex space-x-2 md:space-x-4 items-center">
                    {socialLinks.map(({ href, icon: Icon }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
