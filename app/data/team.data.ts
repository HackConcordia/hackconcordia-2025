import { TranslationObject } from "./translationObject.data";

export type TeamMember = {
    id: number;
    name: string;
    position: string;
    intro: string;
    imageSrc: string;
    socials?: {
        linkedin?: string;
        github?: string;
        instagram?: string;
        website?: string;
    };
};

export const getTeamMembers = (t: TranslationObject): TeamMember[] => [
    {
        id: 1,
        name: "Lucia Jimenez",
        position: t.TeamMember.members[1].position,
        intro: t.TeamMember.members[1].intro,
        imageSrc: "/imgs/team/lucia-jimenez.webp",
        socials: {
            linkedin: "https://www.linkedin.com/in/elba-lucia-jimenez-296b0b152/",
        },
    },
    {
        id: 2,
        name: "Toby Fischer",
        position: t.TeamMember.members[2].position,
        intro: t.TeamMember.members[2].intro,
        imageSrc: "/imgs/team/toby-fischer.webp",
    },
    {
        id: 3,
        name: "Christina Alexandrakis",
        position: t.TeamMember.members[3].position,
        intro: t.TeamMember.members[3].intro,
        imageSrc: "/imgs/team/christina-alexandrakis.webp",
        socials: {
            linkedin: "https://www.linkedin.com/in/christina-alexandrakis-2590b2338",
        },
    },
    {
        id: 4,
        name: "Ning Ye",
        position: t.TeamMember.members[4].position,
        intro: t.TeamMember.members[4].intro,
        imageSrc: "/imgs/team/ning-ye.webp",
    },
    {
        id: 5,
        name: "Mohamad Addasi",
        position: t.TeamMember.members[5].position,
        intro: t.TeamMember.members[5].intro,
        imageSrc: "/imgs/team/mohamad-addasi.webp",
        socials: {
            linkedin: "https://linkedin.com/in/mohamad-addasi",
            github: "https://github.com/Moe1177",
        },
    },
    {
        id: 6,
        name: "Amani Magra",
        position: t.TeamMember.members[6].position,
        intro: t.TeamMember.members[6].intro,
        imageSrc: "/imgs/team/amani-magra.webp",
    },
    {
        id: 7,
        name: "Sarah Tannous",
        position: t.TeamMember.members[7].position,
        intro: t.TeamMember.members[7].intro,
        imageSrc: "/imgs/team/sarah-tannous.webp",
    },
    {
        id: 8,
        name: "Andrew Phillips",
        position: t.TeamMember.members[8].position,
        intro: t.TeamMember.members[8].intro,
        imageSrc: "/imgs/team/andrew-phillips.webp",
    },
    {
        id: 9,
        name: "Noorjahan Kazi",
        position: t.TeamMember.members[9].position,
        intro: t.TeamMember.members[9].intro,
        imageSrc: "/imgs/team/noorjahan-kazi.webp",
    },
    {
        id: 10,
        name: "Ellen Ung",
        position: t.TeamMember.members[10].position,
        intro: t.TeamMember.members[10].intro,
        imageSrc: "/imgs/team/ellen-ung.webp",
    },
    {
        id: 11,
        name: "Goher Ali Syed",
        position: t.TeamMember.members[11].position,
        intro: t.TeamMember.members[11].intro,
        imageSrc: "/imgs/team/goher-ali-syed.webp",
    },
    {
        id: 12,
        name: "Matthew Lucas Santiago",
        position: t.TeamMember.members[12].position,
        intro: t.TeamMember.members[12].intro,
        imageSrc: "/imgs/team/matthew-lucas-santiago.webp",
        socials: {
            linkedin: "https://www.linkedin.com/in/matthew-lucas-santiago",
        },
    },
    {
        id: 13,
        name: "Seydina Gueye",
        position: t.TeamMember.members[13].position,
        intro: t.TeamMember.members[13].intro,
        imageSrc: "/imgs/team/seydina-gueye.webp",
    },
    {
        id: 14,
        name: "Alexandra Siganos",
        position: t.TeamMember.members[14].position,
        intro: t.TeamMember.members[14].intro,
        imageSrc: "/imgs/team/alexandra-siganos.webp",
    },
    {
        id: 15,
        name: "Arthur Huon de Penanster",
        position: t.TeamMember.members[15].position,
        intro: t.TeamMember.members[15].intro,
        imageSrc: "/imgs/team/arthur-huon-de-penanster.webp",
    },
    {
        id: 16,
        name: "Julien Halde",
        position: t.TeamMember.members[16].position,
        intro: t.TeamMember.members[16].intro,
        imageSrc: "/imgs/team/julien-halde.webp",
    },
    {
        id: 17,
        name: "Abdou Maouda",
        position: t.TeamMember.members[17].position,
        intro: t.TeamMember.members[17].intro,
        imageSrc: "/imgs/team/abdou-maouda.webp",
    },
    {
        id: 18,
        name: "Daniela Villamizar Useche",
        position: t.TeamMember.members[18].position,
        intro: t.TeamMember.members[18].intro,
        imageSrc: "/imgs/team/daniela-villamizar-useche.webp",
    },
    {
        id: 19,
        name: "Emily Ng",
        position: t.TeamMember.members[19].position,
        intro: t.TeamMember.members[19].intro,
        imageSrc: "/imgs/team/emily-ng.webp",
    },
    {
        id: 20,
        name: "Maria-Christine Catiche",
        position: t.TeamMember.members[20].position,
        intro: t.TeamMember.members[20].intro,
        imageSrc: "/imgs/team/maria-christine-catiche.webp",
    },
    {
        id: 21,
        name: "Mijan Ullah",
        position: t.TeamMember.members[21].position,
        intro: t.TeamMember.members[21].intro,
        imageSrc: "/imgs/team/mijan-ullah.webp",
        socials: {
            linkedin: "https://www.linkedin.com/in/mijan-ullah-4b99b3298/",
            github: "https://github.com/mijanullah12",
        },
    },
    {
        id: 22,
        name: "Raouf Ouibrahim",
        position: t.TeamMember.members[22].position,
        intro: t.TeamMember.members[22].intro,
        imageSrc: "/imgs/team/raouf-ouibrahim.webp",
    },
    {
        id: 23,
        name: "Shay Luan",
        position: t.TeamMember.members[23].position,
        intro: t.TeamMember.members[23].intro,
        imageSrc: "/imgs/team/shay-luan.webp",
    },
    {
        id: 24,
        name: "Thomas Assalian",
        position: t.TeamMember.members[24].position,
        intro: t.TeamMember.members[24].intro,
        imageSrc: "/imgs/team/thomas-assalian.webp",
    },
    {
        id: 25,
        name: "Antoine Dufour",
        position: t.TeamMember.members[25].position,
        intro: t.TeamMember.members[25].intro,
        imageSrc: "/imgs/team/antoine-dufour.webp",
    },
    {
        id: 26,
        name: "Audrey Clara Tchantchou",
        position: t.TeamMember.members[26].position,
        intro: t.TeamMember.members[26].intro,
        imageSrc: "/imgs/team/audrey-clara-tchantchou.webp",
    },
    {
        id: 27,
        name: "Benjamin Liu",
        position: t.TeamMember.members[27].position,
        intro: t.TeamMember.members[27].intro,
        imageSrc: "/imgs/team/benjamin-liu.webp",
    },
    {
        id: 28,
        name: "Grace Ashley",
        position: t.TeamMember.members[28].position,
        intro: t.TeamMember.members[28].intro,
        imageSrc: "/imgs/team/grace-ashley.webp",
    },
    {
        id: 29,
        name: "Jovan Gavranovic",
        position: t.TeamMember.members[29].position,
        intro: t.TeamMember.members[29].intro,
        imageSrc: "/imgs/team/jovan-gavranovic.webp",
    },
    {
        id: 30,
        name: "Mamadou Camara",
        position: t.TeamMember.members[30].position,
        intro: t.TeamMember.members[30].intro,
        imageSrc: "/imgs/team/mamadou-camara.webp",
    },
    {
        id: 31,
        name: "Salma Benlemlih",
        position: t.TeamMember.members[31].position,
        intro: t.TeamMember.members[31].intro,
        imageSrc: "/imgs/team/salma-benlemlih.webp",
    },
    {
        id: 32,
        name: "Alisa Ignatina",
        position: t.TeamMember.members[32].position,
        intro: t.TeamMember.members[32].intro,
        imageSrc: "/imgs/team/alisa-ignatina.webp",
        socials: {
            linkedin: "https://www.linkedin.com/in/alisa-ignatina",
            github: "https://github.com/alisaign",
            instagram: "https://www.instagram.com/alisaa_ign?igsh=dDRpcW0ydmI0d2Fp",
        },
    },
    {
        id: 33,
        name: "Ashley Samerev",
        position: t.TeamMember.members[33].position,
        intro: t.TeamMember.members[33].intro,
        imageSrc: "/imgs/team/ashley-samerev.webp",
    },
    {
        id: 34,
        name: "Luella Mailloux",
        position: t.TeamMember.members[34].position,
        intro: t.TeamMember.members[34].intro,
        imageSrc: "/imgs/team/luella-mailloux-headshot.webp",
    },
    {
        id: 35,
        name: "Ahmed Fakhir",
        position: t.TeamMember.members[35].position,
        intro: t.TeamMember.members[35].intro,
        imageSrc: "/imgs/team/ahmed-fakhir.webp",
    },
];
