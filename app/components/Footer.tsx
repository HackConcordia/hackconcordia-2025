import Link from 'next/link';
import { footerLinks, copyrightText } from '../data/footer.data';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="fixed bottom-0 w-full text-white backdrop-blur-xs py-4 px-6 z-40">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-4">

                {/* Left: Copyright */}
                <div className="text-sm text-gray-400">
                    {copyrightText(year)}
                </div>

                {/* Right: Links */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                    {footerLinks.map(({ href, label }) => (
                        <Link key={href} href={href} className="text-xs hover:text-yellow-400">
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
