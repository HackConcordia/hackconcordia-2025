import { TranslationObject } from './translationObject.data';

// Helper function to get card text from translation context
export const getCardText = (t: TranslationObject): string[] => [
    t.AboutUs.description,
    t.AboutUs.description3,
    t.AboutUs.description2,
];

// Helper function to get form text from translation context
export const getFormText = (t: TranslationObject) => ({
    subtitle: t.AboutUs.subtitle,
    paragraph: t.AboutUs.paragraph,
    subscriptionText: t.AboutUs.subscribe,
    subscribeButtonText: t.AboutUs.subscribeButton,
    emailPlaceholder: t.AboutUs.emailPlaceholder,
    checkboxLabelPrefix: t.AboutUs.checkboxLabelPrefix,
    checkboxLinkText: t.AboutUs.codeOfConduct,
    checkboxLinkHref: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
    buttonLoadingText: t.AboutUs.buttonLoadingText,    scrollDownText: t.AboutUs.scrollDown,
});

// Helper function to get desktop text boxes with translated content
export const getDesktopTextBoxes = (t: TranslationObject) => {
    const cardText = getCardText(t);
    return [
        {
            text: cardText[0],
            positionClasses:
                "hidden md:block absolute top-0 left-1/3 p-1 mt-4 space-y-4 z-10 max-w-sm",
            rotation: -7,
            glowPosition: "ml-4",
        },
        {
            text: cardText[1],
            positionClasses:
                "hidden md:block absolute bottom-20 right-2 p-2 space-y-4 z-10 max-w-sm",
            rotation: 27,
            glowPosition: "mr-4",
        },
        {
            text: cardText[2],
            positionClasses:
                "hidden md:block absolute bottom-5 left-5 space-y-4 z-10 max-w-sm pb-12",
            rotation: -27,
            glowPosition: "",
        },
    ];
};
export const images = [
    {
        src: "/imgs/about_us1.jpg",
        alt: "image 1",
        width: 300,
        height: 200,
        rotation: 35,
        positionClasses: "hidden md:block absolute top-15 right-5 space-y-4 z-10 max-w-md",
    },
    {
        src: "/imgs/about_us2.jpg",
        alt: "image 2",
        width: 300,
        height: 200,
        rotation: -45,
        positionClasses: "hidden md:block absolute top-10 left-8 space-y-4 z-10 max-w-md",
    },
];