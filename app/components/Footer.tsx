import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full text-white backdrop-blur-xs py-4 px-6 z-40">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-4">

                {/* Left: Copyright */}
                <div className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Hackcordia. All rights reserved.
                </div>

                {/* Right: Links */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                    <Link href="/terms" className="text-xs hover:text-yellow-400">Terms of Service</Link>
                    <Link href="/privacy" className="text-xs hover:text-yellow-400">Privacy Policy</Link>
                    {/* <Link href="/sponsors" className="hover:text-yellow-400">Sponsors</Link> */}
                </div>
            </div>
        </footer>
    );
}
