'use client';

export default function TermsPage() {
    return (
        <section className="relative z-10 md:h-[calc(100vh-140px)] max-w-7xl mx-auto mb-20 md:mb-0 px-4 sm:px-6 lg:px-8 overflow-y-auto text-white">
            <h1 className="mt-5 z-20 relative text-3xl font-bold mb-1 text-yellow-400">Terms of Service</h1>
            <p className="mb-8 font-semibold text-xs">Effective Date: August 12, 2025</p>

            <p className="mb-6">
                Welcome to HackConcordia! By participating in our events, including ConUHacks, workshops, and other activities, you agree to comply with the following Terms of Service. Please read them carefully.
            </p>

            <ol className="list-decimal list-inside space-y-6">
                <li>
                    <strong>Introduction</strong><br />
                    HackConcordia is a student-run organization at Concordia University, dedicated to fostering a community of developers and tech enthusiasts. Our mission is to promote the hacking culture at Concordia University and represent the university within the broader hacking community.
                </li>

                <li>
                    <strong>Eligibility</strong><br />
                    To participate in HackConcordia events, you must:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Be a registered student at Concordia University or meet specific eligibility criteria outlined for each event.</li>
                        <li>Provide accurate and complete information during registration.</li>
                        <li>Agree to comply with all event-specific rules and guidelines.</li>
                    </ul>
                </li>

                <li>
                    <strong>Registration and Participation</strong><br />
                    Registration: Participants must complete the official registration process for each event.<br />
                    Team Composition: Teams may consist of individuals as specified in the event guidelines.<br />
                    Code of Conduct: All participants must adhere to HackConcordia&apos;s Code of Conduct, promoting respect, inclusivity, and collaboration.
                </li>

                <li>
                    <strong>Intellectual Property</strong><br />
                    Ownership: Participants retain ownership of their intellectual property created during events.<br />
                    Licensing: By submitting projects, participants grant HackConcordia and its partners a non-exclusive, royalty-free license to use, display, and distribute the projects for promotional and educational purposes.
                </li>

                <li>
                    <strong>Privacy and Data Collection</strong><br />
                    Personal Information: HackConcordia collects personal information as part of the registration process. This information is used solely for event-related purposes and is not shared with third parties without consent.<br />
                    Media Consent: Participants consent to the recording and use of their likeness in photographs and videos taken during events for promotional purposes.
                </li>

                <li>
                    <strong>Liability and Indemnification</strong><br />
                    Limitation of Liability: HackConcordia is not liable for any direct, indirect, incidental, or consequential damages arising from participation in events.<br />
                    Indemnification: Participants agree to indemnify and hold harmless HackConcordia and its affiliates from any claims, damages, or liabilities resulting from their actions during events.
                </li>

                <li>
                    <strong>Modifications to Terms</strong><br />
                    HackConcordia reserves the right to modify these Terms of Service at any time. Participants will be notified of significant changes, and continued participation constitutes acceptance of the updated terms.
                </li>

                <li>
                    <strong>Governing Law</strong><br />
                    These Terms of Service are governed by the laws of the Province of Quebec, Canada. Any disputes will be resolved in the appropriate courts located within Quebec.
                </li>
            </ol>

            <p className="mt-8">
                For more information about HackConcordia, please visit our official website.
            </p>

            <p className="mt-2">
                If you have any questions or concerns regarding these Terms of Service, please contact us at{' '}
                <a href="mailto:contact@hackconcordia.com" className="text-blue-600 underline">
                    contact@hackconcordia.com
                </a>.
            </p>
        </section>
    );
}
