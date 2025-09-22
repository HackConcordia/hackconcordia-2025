import { TranslationObject } from './translationObject.data';

export const getFooterLinks = (t: TranslationObject): { href: string; label: string }[] => [
    { href: '/terms', label: t.Footer.terms },
    { href: '/privacy', label: t.Footer.privacy },
    // { href: '/sponsors', label: t.footer.sponsors }, // Uncomment if needed
];

export const getCopyrightText = (year: number, t: TranslationObject) =>
    `© ${year} HackConcordia. ${t.Footer.rights}`;