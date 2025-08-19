export const cardText = [
    `This is your hub for all things hacking. From upcoming hackathons and events to curated learning resources, this site is your launchpad to grow your skills, meet fellow builders, and bring your ideas to life.`,
    `Meet the buzzing minds building Quebec’s biggest student hackathon. HackConcordia is a student-led tech community at Concordia University.`,
    `Ready to dive in? Whether you want to compete in a hackathon, attend a workshop, or just meet some like-minded tech lovers, HackConcordia has a spot for you.`,
];

// Static text for form labels, button text, etc (optional)
export const formText = {
    title: "Subscribe",
    emailPlaceholder: "Enter your email",
    checkboxLabelPrefix: "I agree to ",
    checkboxLinkText: "MLH's Code of Conduct",
    checkboxLinkHref: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
    buttonLoadingText: "Subscribing...",
    buttonIdleText: "Subscribe",
    subtitle: "Bringing Quebec’s biggest hackathon to life.",
    tagline: "Bee the Change. Code the Future.",
    scrollDownText: "Scroll down to know more",
    subscriptionText: "Subscribe to get the latest updates",
};

export const desktopTextBoxes = [
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