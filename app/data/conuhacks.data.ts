import { TranslationObject } from "./translationObject.data";

type Slide = {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    stats?: Record<string, string>;
    winners?: {
        position: string;
        team: string;
        project: string;
        description: string;
        devpostlink: string;
        youtube?: string;
    }[];
    tag?: string;
    others?: Record<string, string>;
    devpost?: string;
};

export const getSlides = (t: TranslationObject): Slide[] => [
    // 1) ConUHacks overview
    {
        id: 1,
        image: '/imgs/conuhacks/conu.jpg',
        title: t.ConuHacks.slides[1].title,
        subtitle: t.ConuHacks.slides[1].subtitle,
        stats: undefined,
        tag: 'Hackathon',
        others: {
            Date: t.ConuHacks.slides[1].others?.date ?? '',
            Location: t.ConuHacks.slides[1].others?.location ?? '',
            Duration: t.ConuHacks.slides[1].others?.duration ?? '',
            Theme: t.ConuHacks.slides[1].others?.theme ?? '',
            Registration: t.ConuHacks.slides[1].others?.registration ?? '',
            Website: 'https://conuhacks.io',
        },
    },

    // ConUHacks IX – The Next Frontier (2025)
    {
        id: 2,
        image: '/imgs/conuhacks/conu9.jpg',
        title: t.ConuHacks.slides[10].title,
        subtitle:
            t.ConuHacks.slides[10].subtitle,
        stats: { [t.ConuHacks.participants]: '850+', [t.ConuHacks.projects]: '143+', [t.ConuHacks.mentors]: '100+', [t.ConuHacks.sponsors]: '50+' },
        winners: [
            {
                position: '1',
                team: 'PrezPal',
                project: 'PrezPal',
                description: t.ConuHacks.slides[10].winners?.[0]?.description || '',
                devpostlink: 'https://devpost.com/software/prezpal-36079w',
                youtube: "https://youtu.be/yamqvno6T1g"
            },
            {
                position: '2',
                team: 'LeetWrite',
                project: 'LeetWrite',
                description: t.ConuHacks.slides[10].winners?.[1]?.description || '',
                devpostlink: 'https://devpost.com/software/leetwrite',
                youtube: "https://youtu.be/CKVScKptAec"
            },
            {
                position: '3',
                team: '404 Lost & Found',
                project: '404 Lost & Found',
                description: t.ConuHacks.slides[10].winners?.[2]?.description || '',
                devpostlink: 'https://devpost.com/software/404-lost-found',
                youtube: "https://youtu.be/BHq4QkTe6PE"
            }
        ],
        tag: t.ConuHacks.slides[10].tag || 'Ninth Edition',
        devpost: "https://conuhacks-ix.devpost.com/"
    },

    // ConUHacks VIII – Uncharted Territories (2024)
    {
        id: 3,
        image: '/imgs/conuhacks/conu8.jpg',
        title: t.ConuHacks.slides[9].title,
        subtitle: t.ConuHacks.slides[9].subtitle,
        stats: { [t.ConuHacks.participants]: '800+', [t.ConuHacks.projects]: '400+', [t.ConuHacks.mentors]: '90+', [t.ConuHacks.sponsors]: '40+' },
        winners: [
            {
                position: '1',
                team: 'Spartan',
                project: 'Spartan',
                description: t.ConuHacks.slides[9].winners?.[0]?.description || '',
                devpostlink: 'https://devpost.com/software/spartan',
                youtube: "https://youtu.be/nfhIwxx5KrE"
            },
            {
                position: '2',
                team: 'MotiSpectra',
                project: 'MotiSpectra',
                description: t.ConuHacks.slides[9].winners?.[1]?.description || '',
                devpostlink: 'https://devpost.com/software/motispectra',
                youtube: "https://youtu.be/yr4MhT2WnGA"
            },
            {
                position: '3',
                team: 'Avada Kedavra',
                project: 'Avada Kedavra',
                description: t.ConuHacks.slides[9].winners?.[2]?.description || '',
                devpostlink: 'https://devpost.com/software/avada-kedavra',
            }
        ],
        tag: t.ConuHacks.slides[9].tag || 'Eighth Edition',
    },

    // ConUHacks VII – Breaking Boundaries (2023)
    {
        id: 4,
        image: '/imgs/conuhacks/conu7.jpg',
        title: t.ConuHacks.slides[8].title,
        subtitle: t.ConuHacks.slides[8].subtitle,
        stats: { [t.ConuHacks.participants]: '750+', [t.ConuHacks.projects]: '350+', [t.ConuHacks.mentors]: '80+', [t.ConuHacks.sponsors]: '35+' },
        winners: [
            {
                position: '1',
                team: 'NearbyNow',
                project: 'NearbyNow',
                description: t.ConuHacks.slides[8].winners?.[0]?.description || '',
                devpostlink: 'https://devpost.com/software/nearbynow',
            },
            {
                position: '2',
                team: 'Jane',
                project: 'Jane',
                description: t.ConuHacks.slides[8].winners?.[1]?.description || '',
                devpostlink: 'https://devpost.com/software/jane-9jka4i',
            },
            {
                position: '3',
                team: 'MeLody',
                project: 'MeLody',
                description: t.ConuHacks.slides[8].winners?.[2]?.description || '',
                devpostlink: 'https://devpost.com/software/mlody',
            }
        ],
        tag: t.ConuHacks.slides[8].tag || 'Seventh Edition',
    },

    // ConUHacks VI – Innovation Unleashed (2022)
    {
        id: 5,
        image: '/imgs/conuhacks/conu6.jpg',
        title: t.ConuHacks.slides[7].title,
        subtitle: t.ConuHacks.slides[7].subtitle,
        stats: { [t.ConuHacks.participants]: '750+', [t.ConuHacks.projects]: '300+', [t.ConuHacks.mentors]: '70+', [t.ConuHacks.sponsors]: '30+' },
        winners: [
            {
                position: '1',
                team: 'RevYou',
                project: 'RevYou',
                description: t.ConuHacks.slides[7].winners?.[0]?.description || '',
                devpostlink: 'https://devpost.com/software/revyou',
            },
            {
                position: '2',
                team: "Four O' Four",
                project: "Four O' Four",
                description: t.ConuHacks.slides[7].winners?.[1]?.description || '',
                devpostlink: 'https://devpost.com/software/four-o-four',
                youtube: "https://youtu.be/UrS1tbuyW8Y"
            },
            {
                position: '3',
                team: 'Furnishare',
                project: 'Furnishare',
                description: t.ConuHacks.slides[7].winners?.[2]?.description || '',
                devpostlink: 'https://devpost.com/software/furnishare',
                youtube: "https://youtu.be/nycW-l9_gDg"
            }
        ],
        tag: t.ConuHacks.slides[7].tag || 'Sixth Edition',
    },

    // ConUHacks V – A New Era (2020)
    {
        id: 6,
        image: '/imgs/conuhacks/conu5.jpg',
        title: t.ConuHacks.slides[6].title,
        subtitle: t.ConuHacks.slides[6].subtitle,
        stats: { [t.ConuHacks.participants]: '700+', [t.ConuHacks.projects]: '250+', [t.ConuHacks.mentors]: '60+', [t.ConuHacks.sponsors]: '49+' },
        winners: [
            {
                position: '1',
                team: 'BookLens',
                project: 'BookLens',
                description: t.ConuHacks.slides[6].winners?.[0]?.description || '',
                devpostlink: 'https://devpost.com/software/booklens',
            },
            {
                position: '2',
                team: "LIFEtrainer",
                project: "LIFEtrainer",
                description: t.ConuHacks.slides[6].winners?.[1]?.description || '',
                devpostlink: 'https://devpost.com/software/lifetrainer'
            },
            {
                position: '3',
                team: 'TowAR',
                project: 'TowAR',
                description: t.ConuHacks.slides[6].winners?.[2]?.description || '',
                devpostlink: 'https://devpost.com/software/bit-wizards-7u1sl4'
            }
        ],
        tag: t.ConuHacks.slides[6].tag || 'Fifth Edition',
    },

    // ConUHacks IV – The Future Awaits (2019)
    {
        id: 7,
        image: '/imgs/conuhacks/conu4.jpg',
        title: t.ConuHacks.slides[5].title,
        subtitle: t.ConuHacks.slides[5].subtitle,
        stats: { [t.ConuHacks.participants]: '700+', [t.ConuHacks.projects]: '180+', [t.ConuHacks.mentors]: '45+', [t.ConuHacks.sponsors]: '18+' },
        winners: [
            {
                position: '1',
                team: 'HEAR',
                project: 'HEAR',
                description: t.ConuHacks.slides[5].winners?.[0]?.description || '',
                devpostlink: 'https://devpost.com/software/hear-generating-subtitles-for-life',
                youtube: "https://youtu.be/vE7q2J6y1Fg"
            },
            {
                position: '2',
                team: "Sustainable IOT Fridge",
                project: "Sustainable IOT Fridge",
                description: t.ConuHacks.slides[5].winners?.[1]?.description || '',
                devpostlink: 'https://devpost.com/software/virtual-fridge-yt7gc4'
            },
            {
                position: '3',
                team: 'SmarTrash',
                project: 'SmarTrash',
                description: t.ConuHacks.slides[5].winners?.[2]?.description || '',
                devpostlink: 'https://devpost.com/software/smartrash'
            }
        ],
        tag: t.ConuHacks.slides[5].tag || 'Fourth Edition',
    },

    // ConUHacks III – The Evolution Continues (2018)
    {
        id: 8,
        image: '/imgs/conuhacks/conu3.jpg',
        title: t.ConuHacks.slides[4].title,
        subtitle: t.ConuHacks.slides[4].subtitle,
        stats: { [t.ConuHacks.participants]: '600+', [t.ConuHacks.projects]: '150+', [t.ConuHacks.mentors]: '40+', [t.ConuHacks.sponsors]: '15+' },
        winners: [
            {
                position: '1',
                team: 'Alice',
                project: 'Alice',
                description: t.ConuHacks.slides[4].winners?.[0]?.description || 'Alice aims to empower elderly people that currently suffer dementia and wish to utilize online banking.',
                devpostlink: 'https://devpost.com/software/alice-8kyna4',
            },
            {
                position: '2',
                team: "Senior Sensor",
                project: "Senior Sensor",
                description: t.ConuHacks.slides[4].winners?.[1]?.description || 'Letting you know your loved ones are safe, wherever you are.',
                devpostlink: 'https://devpost.com/software/elderly-notifications',
                youtube: "https://youtu.be/E5A0DZAkQT0"
            },
            {
                position: '3',
                team: 'Chaperone',
                project: 'Chaperone',
                description: t.ConuHacks.slides[4].winners?.[2]?.description || 'A web app dashboard helping elders with their reminders on the Amazon Echo.',
                devpostlink: 'https://devpost.com/software/chaperone'
            }
        ],
        tag: t.ConuHacks.slides[4].tag || 'Third Edition',
    },

    // ConUHacks II – The Next Chapter (2017)
    {
        id: 9,
        image: '/imgs/conuhacks/conu2.jpg',
        title: t.ConuHacks.slides[3].title,
        subtitle: t.ConuHacks.slides[3].subtitle,
        stats: { [t.ConuHacks.participants]: '400+', [t.ConuHacks.projects]: '120+', [t.ConuHacks.mentors]: '35+', [t.ConuHacks.sponsors]: '14+' },
        winners: [
            {
                position: '1',
                team: 'InstantPi',
                project: 'InstantPi',
                description: t.ConuHacks.slides[3].winners?.[0]?.description || '',
                devpostlink: 'https://devpost.com/software/conuhacks',
            },
            {
                position: '2',
                team: "Foody",
                project: "Foody",
                description: t.ConuHacks.slides[3].winners?.[1]?.description || '',
                devpostlink: 'https://devpost.com/software/foody-lfbvrn'
            },
            {
                position: '3',
                team: 'L2Talk',
                project: 'L2Talk',
                description: t.ConuHacks.slides[3].winners?.[2]?.description || '',
                devpostlink: 'https://devpost.com/software/l2talk'
            }
        ],
        tag: t.ConuHacks.slides[3].tag || 'Second Edition',
    },

    // ConUHacks I – A Journey Begins (2016)
    {
        id: 10,
        image: '/imgs/conuhacks/conu1.jpg',
        title: t.ConuHacks.slides[2].title,
        subtitle: t.ConuHacks.slides[2].subtitle,
        stats: { [t.ConuHacks.participants]: '250+', [t.ConuHacks.projects]: '100+', [t.ConuHacks.mentors]: '30+', [t.ConuHacks.sponsors]: '10+' },
        winners: [
            {
                position: '1',
                team: 'DOUBLEVISION',
                project: 'DOUBLEVISION',
                description: t.ConuHacks.slides[2].winners?.[0]?.description || '',
                devpostlink: 'https://devpost.com/software/doublevision',
                youtube: "https://youtu.be/kKdxBxN9THQ"
            },
            {
                position: '2',
                team: "SignSpeaks",
                project: "SignSpeaks",
                description: t.ConuHacks.slides[2].winners?.[1]?.description || '',
                devpostlink: 'https://devpost.com/software/signspeaks'
            },
            {
                position: '3',
                team: 'ProViralPictures.net',
                project: 'ProViralPictures.net',
                description: t.ConuHacks.slides[2].winners?.[2]?.description || '',
                devpostlink: 'https://devpost.com/software/proviralpictures-net'
            }
        ],
        tag: t.ConuHacks.slides[2].tag || 'First Edition',
    },
];