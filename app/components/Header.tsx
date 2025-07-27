'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

export default function Header() {
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/conuhacks', label: 'ConuHacks' },
        { href: '/events', label: 'Events' },
        { href: '/team', label: 'Team' },
        { href: '/faq', label: 'FAQ' },
    ];

    return (
        <header className="w-full fixed top-0 z-50 text-white backdrop-blur-xs">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-2">

                {/* Left Title */}
                <div className="flex items-center space-x-2" style={{ marginLeft: '-4px' }}>
                    <Image src="/imgs/HC_logo.png" alt="alt" width={40} height={40} />
                    <div className="text-xl font-bold">
                    HackConcordia
                </div>
                </div>

                {/* Middle Navigation */}
                <nav className="space-x-6 text-sm md:text-base">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={clsx(
                                'transition-colors hover:text-yellow-400',
                                pathname === href ? 'text-yellow-500 font-semibold' : ''
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Right Icons */}
                <div className="flex space-x-4">
                    <a  className='hover:text-yellow-400' href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={18} /></a>
                    <a  className='hover:text-yellow-400' href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
                    <a  className='hover:text-yellow-400' href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
                    <a  className='hover:text-yellow-400' href="mailto:email@example.com"><Mail size={18} /></a>
                </div>
            </div>
        </header>
    );
}
