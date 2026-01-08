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
        name: "Elizabeth Wong",
        position: t.TeamMember.members[2].position,
        intro: t.TeamMember.members[2].intro,
        imageSrc: "/imgs/team/liz.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/e-lizabethwong/",
            github: "https://github.com/e-lizabethwong",
        }
    },
    {
        id: 2,
        name: "Bertin Mihigo Sano",
        position: t.TeamMember.members[1].position,
        intro: t.TeamMember.members[1].intro,
        imageSrc: "/imgs/team/Bertin.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/sanobertin/",
            github: "https://github.com/sanobertin",
        }
    },
    {
        id: 3,
        name: "Mohammed Huzaifa",
        position: t.TeamMember.members[3].position,
        intro: t.TeamMember.members[3].intro,
        imageSrc: "/imgs/team/mohammed_huzaifa.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/huzaifa-anjum/",
            github: "https://github.com/mhuzaifa",
            instagram: "https://www.instagram.com/_huzaifaanjum_/",
            website: "http://mohammedhuzaifa.vercel.app/"
        }
    },
    {
        id: 4,
        name: "Masoumeh Farokhpour (Maryam)",
        position: t.TeamMember.members[4].position,
        intro: t.TeamMember.members[4].intro,
        imageSrc: "/imgs/team/masoumeh_farokhpour.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/masoumeh-farokhpour",
            github: "https://github.com/MasoumehF",
            instagram: "https://www.instagram.com/themaryaam"
        }
    },
    {
        id: 5,
        name: "Sabine Hleiss",
        position: t.TeamMember.members[5].position,
        intro: t.TeamMember.members[5].intro,
        imageSrc: "/imgs/team/sabine_hleiss.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/sabinehleiss/"
        }
    },
    {
        id: 6,
        name: "Matthew Lucas Santiago",
        position: t.TeamMember.members[6].position,
        intro: t.TeamMember.members[6].intro,
        imageSrc: "/imgs/team/matthew_lucas_santiago.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/matthew-lucas-santiago"
        }
    },
    {
        id: 7,
        name: "Elba Lucia Jimenez",
        position: t.TeamMember.members[7].position,
        intro: t.TeamMember.members[7].intro,
        imageSrc: "/imgs/team/elba_lucia_jimenez.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/elba-lucia-jimenez-296b0b152/"
        }
    },
    {
        id: 8,
        name: "Johnny Dang",
        position: t.TeamMember.members[8].position,
        intro: t.TeamMember.members[8].intro,
        imageSrc: "/imgs/team/johnny_dang.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/johnnydang22/"
        }
    },
    {
        id: 9,
        name: "Christina Alexandrakis",
        position: t.TeamMember.members[9].position,
        intro: t.TeamMember.members[9].intro,
        imageSrc: "/imgs/team/christina_alexandrakis.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/christina-alexandrakis-2590b2338"
        }
    },
    {
        id: 10,
        name: "Talar Mustafa",
        position: t.TeamMember.members[10].position,
        intro: t.TeamMember.members[10].intro,
        imageSrc: "/imgs/team/talar.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/talar-mustafa/"
        }
    },
    {
        id: 11,
        name: "Valeria Rosca",
        position: t.TeamMember.members[11].position,
        intro: t.TeamMember.members[11].intro,
        imageSrc: "/imgs/team/valeria_rosca.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/valeria-rosca"
        }
    },
    {
        id: 12,
        name: "Mohamad Addasi",
        position: t.TeamMember.members[12].position,
        intro: t.TeamMember.members[12].intro,
        imageSrc: "/imgs/team/mohamad_addasi.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/mohamad-addasi",
            github: "https://github.com/Moe1177"
        }
    },
    {
        id: 14,
        name: "Mridani Kashyap (Dani)",
        position: t.TeamMember.members[14].position,
        intro: t.TeamMember.members[14].intro,
        imageSrc: "/imgs/team/mridani_kashyap.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/mridani-kashyap"
        }
    },
    {
        id: 15,
        name: "Alisa Ignatina",
        position: t.TeamMember.members[15].position,
        intro: t.TeamMember.members[15].intro,
        imageSrc: "/imgs/team/alisa_ignatina.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/alisa-ignatina",
            github: "https://github.com/alisaign",
            instagram: "https://www.instagram.com/alisaa_ign?igsh=dDRpcW0ydmI0d2Fp"
        }
    },
    {
        id: 17,
        name: "Janani Thiyagarajah",
        position: t.TeamMember.members[17].position,
        intro: t.TeamMember.members[17].intro,
        imageSrc: "/imgs/team/janani_thiyagarajah.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/janani-thiyagarajah"
        }
    },
    {
        id: 18,
        name: "Mijan Ullah",
        position: t.TeamMember.members[18].position,
        intro: t.TeamMember.members[18].intro,
        imageSrc: "/imgs/team/mijan.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/mijan-ullah-4b99b3298/",
            github: "https://github.com/mijanullah12",
        }
    },
    {
        id: 19,
        name: "Subaanky Krishnapillai",
        position: t.TeamMember.members[19].position,
        intro: t.TeamMember.members[19].intro,
        imageSrc: "/imgs/team/subaanky_krishnapillai.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/subaankykrishnapillai",
            github: "http://github.com/Subaanky"
        }
    }, 
    {
         id: 20,
        name: "Steven Lam",
        position: t.TeamMember.members[20].position,
        intro: t.TeamMember.members[20].intro,
        imageSrc: "/imgs/team/Steven.jpeg",
        socials: {
            linkedin: "https://www.linkedin.com/in/steven-lam12/"
        }
    },
    {
        id: 21,
        name: "Marilyne Nguyen",
        position: t.TeamMember.members[21].position,
        intro: t.TeamMember.members[21].intro,
        imageSrc: "/imgs/team/Marilyne.jpeg",
        socials: {
            linkedin: "https://www.linkedin.com/in/marilyne-nguyen1515/",
            github: "https://github.com/marilynenguyen"
        }
    }, 
    {
        id: 22,
        name: "Hajar Blahmam",
        position: t.TeamMember.members[22].position,
        intro: t.TeamMember.members[22].intro,
        imageSrc: "/imgs/team/Hajar.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/hblahmam721/"
        }
    }, 
    {
        id: 23,
        name: "Toby Fischer",
        position: t.TeamMember.members[23].position,
        intro: t.TeamMember.members[23].intro,
        imageSrc: "/imgs/team/Toby.jpg",
        socials: {
            linkedin: ""
        }
    },
];