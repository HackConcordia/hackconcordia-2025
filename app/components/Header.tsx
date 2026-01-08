'use client';

import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from "../i18n/TranslationContext";
import { Language } from "../i18n/type";
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {
    getNavLinks,
    pageToSectionMap,
    socialLinks,
    logo,
} from '../data/header.data';
import en from "../locales/en";
import fr from "../locales/fr";

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('home');
    const pathname = usePathname();
    const router = useRouter();
    const { setLanguage, language } = useTranslation();
    const observerRef = useRef<IntersectionObserver | null>(null);
    const lastUpdateRef = useRef(0);

    // Get navigation links based on current language
    const currentLanguage = useMemo(() => language === 'en' ? en : fr, [language]);
    const navLinks = useMemo(() => getNavLinks(currentLanguage), [currentLanguage]);

    const hideLinks = pathname?.startsWith('/verify-email');

    // Throttled section update
    const updateActiveSection = useCallback((sectionId: string) => {
        const now = Date.now();
        if (now - lastUpdateRef.current < 100) return; // Throttle to 100ms
        lastUpdateRef.current = now;
        setActiveSection(sectionId);
    }, []);

    // Observe sections for active link highlighting
    useEffect(() => {
        if (!pathname) return;

        const mappedSection = pageToSectionMap[pathname];
        if (mappedSection) {
            setActiveSection(mappedSection);
            return;
        }

        // Cleanup previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        const observerOptions = { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    if (sectionId) updateActiveSection(sectionId);
                }
            });
        }, observerOptions);

        observerRef.current = observer;

        const sections = document.querySelectorAll('[id="home"], [id="conuhacks"], [id="team"], [id="faq"], [id="events"]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [pathname, updateActiveSection]);

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
        <header className="w-full fixed top-0 z-50 text-white bg-black/80 px-4 md:px-0" style={{ willChange: 'transform' }}>
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
                    
                     {/* Language Switcher */}
                     <div>
                        {
                            language === Language.en ?
                                <button 
                                    onClick={() => setLanguage(Language.fr)} 
                                    className="hover:text-yellow-400 text-lg font-medium transition-colors"
                                    style={{ cursor: "pointer" }}
                                >
                                    FR
                                </button> :
                                <button 
                                    onClick={() => setLanguage(Language.en)} 
                                    className="hover:text-yellow-400 text-lg font-medium transition-colors"
                                    style={{ cursor: "pointer" }}
                                >
                                    EN
                                </button>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}
