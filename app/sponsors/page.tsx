'use client';

export default function SponsorsPage() {
    return (
        <section className="relative z-10 md:h-[calc(100vh-140px)] max-w-7xl mx-auto mb-20 md:mb-0 px-4 sm:px-6 lg:px-8 overflow-y-auto text-white">
            <h1 className="mt-5 z-20 relative text-3xl font-bold mb-6 text-yellow-400">Our Sponsors</h1>

            <p className="mb-6">
                We are grateful for the support of our sponsors who make HackConcordia possible.
            </p>

            <div className="space-y-12">
                {/* Presenting Sponsor */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold mb-4">Presenting Sponsor</h2>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/sponsors/presenting-sponsor-logo.png" alt="Presenting Sponsor" className="mx-auto h-24" />
                    </a>
                    <p className="mt-2 text-sm">Proudly supporting HackConcordia as our Presenting Sponsor.</p>
                </div>

                {/* Gold Sponsors */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold mb-4">Gold Sponsors</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Repeat for each Gold Sponsor */}
                        <div>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                <img src="/images/sponsors/gold-sponsor-logo.png" alt="Gold Sponsor" className="mx-auto h-20" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Silver Sponsors */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold mb-4">Silver Sponsors</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Repeat for each Silver Sponsor */}
                        <div>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                <img src="/images/sponsors/silver-sponsor-logo.png" alt="Silver Sponsor" className="mx-auto h-20" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bronze Sponsors */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold mb-4">Bronze Sponsors</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Repeat for each Bronze Sponsor */}
                        <div>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                <img src="/images/sponsors/bronze-sponsor-logo.png" alt="Bronze Sponsor" className="mx-auto h-20" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Community Partners */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold mb-4">Community Partners</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Repeat for each Community Partner */}
                        <div>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                <img src="/images/sponsors/community-partner-logo.png" alt="Community Partner" className="mx-auto h-20" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
