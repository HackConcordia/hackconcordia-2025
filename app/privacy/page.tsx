'use client';

export default function PrivacyPolicyPage() {
    return (
        <section className="relative z-10 md:h-[calc(100vh-140px)] max-w-7xl mx-auto mb-20 md:mb-0 px-4 sm:px-6 lg:px-8 overflow-y-auto text-white">
            <h1 className="mt-5 z-20 relative text-3xl font-bold mb-1 text-yellow-400">Privacy Policy</h1>
            <p className="mb-8 font-semibold text-xs">Effective Date: August 12, 2025</p>

            <p className="mb-6">
                HackConcordia (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you participate in our events, visit our website, or interact with us in other ways.
            </p>

            <ol className="list-decimal list-inside space-y-6">
                <li>
                    <strong>Information We Collect</strong><br />
                    We may collect the following types of personal information:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Contact information such as name, email address, and phone number.</li>
                        <li>Academic and affiliation details, including your university and program.</li>
                        <li>Registration information for events and workshops.</li>
                        <li>Media such as photos and videos taken during events.</li>
                        <li>Usage data related to your interaction with our website or online platforms.</li>
                    </ul>
                </li>

                <li>
                    <strong>How We Use Your Information</strong><br />
                    We use your personal information to:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Manage event registrations and participation.</li>
                        <li>Communicate important information and updates.</li>
                        <li>Promote HackConcordia and its activities through media and marketing.</li>
                        <li>Improve our services and event experience.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>
                </li>

                <li>
                    <strong>Information Sharing and Disclosure</strong><br />
                    We do not sell your personal information. We may share your information with:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>HackConcordia partners and sponsors for event-related purposes.</li>
                        <li>Service providers who assist us with operations under confidentiality agreements.</li>
                        <li>Legal authorities when required by law or to protect rights and safety.</li>
                    </ul>
                </li>

                <li>
                    <strong>Data Security</strong><br />
                    We implement reasonable security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </li>

                <li>
                    <strong>Your Rights</strong><br />
                    You may have the right to access, correct, or delete your personal information. Please contact us at the address below to exercise these rights.
                </li>

                <li>
                    <strong>Cookies and Tracking Technologies</strong><br />
                    Our website may use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings.
                </li>

                <li>
                    <strong>Changes to This Privacy Policy</strong><br />
                    We may update this policy periodically. We will notify participants of significant changes and post the updated policy on our website.
                </li>

                <li>
                    <strong>Contact Us</strong><br />
                    If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                    <a href="mailto:contact@hackconcordia.com" className="text-blue-600 underline">
                        contact@hackconcordia.com
                    </a>.
                </li>
            </ol>
        </section>
    );
}
