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

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Bertin Mihigo Sano",
        position: "Co-President",
        intro: "COEN student and co-president of HackConcordia.",
        imageSrc: "/imgs/team/Bertin.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/sanobertin/",
            github: "https://github.com/sanobertin",
        }
    },
    {
        id: 2,
        name: "Elizabeth Wong",
        position: "Co-President",
        intro: "Bachelor Computer Science Student with a Joint Major in Data Science student and co-president of HackConcordia.",
        imageSrc: "/imgs/team/liz.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/e-lizabethwong/",
            github: "https://github.com/e-lizabethwong",
        }
    },
    {
        id: 3,
        name: "Mohammed Huzaifa",
        position: "Vice President of Technology",
        intro: "Master of Applied Computer Science student passionate about full-stack development and building impactful tech solutions.",
        imageSrc: "/imgs/team/mohammed_huzaifa.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/huzaifa-anjum/",
            github: "https://github.com/mhuzaifa",
            instagram: "https://www.instagram.com/_huzaifaanjum_/",
            website: "https://huzaifaanjumportfolio.web.app/"
        }
    },
    {
        id: 4,
        name: "Masoumeh Farokhpour (Maryam)",
        position: "Director of Technology",
        intro: "MACS student with a strong interest in innovative software development and collaborative tech projects.",
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
        position: "Director of Sponsorship",
        intro: "COEN student committed to fostering strong partnerships and sponsor relationships for impactful events.",
        imageSrc: "/imgs/team/sabine_hleiss.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/sabinehleiss/"
        }
    },
    {
        id: 6,
        name: "Matthew Lucas Santiago",
        position: "Director of Marketing",
        intro: "SOEN student with a drive for impactful communication and outreach.",
        imageSrc: "/imgs/team/matthew_lucas_santiago.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/matthew-lucas-santiago"
        }
    },
    {
        id: 7,
        name: "Elba Lucia Jimenez",
        position: "Vice President of Marketing",
        intro: "CompSci student dedicated to promoting events and creating vibrant community connections.",
        imageSrc: "/imgs/team/elba_lucia_jimenez.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/elba-lucia-jimenez-296b0b152/"
        }
    },
    {
        id: 8,
        name: "Johnny Dang",
        position: "Director of Technology",
        intro: "SOEN student with an interest in cutting-edge technologies and efficient problem-solving.",
        imageSrc: "/imgs/team/johnny_dang.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/johnnydang22/"
        }
    },
    {
        id: 9,
        name: "Christina Alexandrakis",
        position: "Director of Marketing",
        intro: "SOEN student passionate about creative marketing campaigns and community engagement.",
        imageSrc: "/imgs/team/christina_alexandrakis.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/christina-alexandrakis-2590b2338"
        }
    },
    {
        id: 10,
        name: "Louay Helou",
        position: "Director of Technology",
        intro: "BCompSc student passionate about Coding.",
        imageSrc: "/imgs/team/Louay.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/christina-alexandrakis-2590b2338"
        }
    },
    {
        id: 11,
        name: "Valeria Rosca",
        position: "Director of Sponsorship",
        intro: "SOEN student with a passion for connecting with partners and creating mutually beneficial collaborations.",
        imageSrc: "/imgs/team/valeria_rosca.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/valeria-rosca"
        }
    },
    {
        id: 12,
        name: "Mohamad Addasi",
        position: "Director of Technology",
        intro: "SOEN student focused on scalable, efficient software engineering and emerging technologies.",
        imageSrc: "/imgs/team/mohamad_addasi.jpg",
        socials: {
            linkedin: "https://linkedin.com/in/mohamad-addasi",
            github: "https://github.com/Moe1177"
        }
    },
    {
        id: 13,
        name: "Tiffany Andriamiharimanana",
        position: "Director of Technology",
        intro: "SOEN student passionate about software development and inclusive tech communities.",
        imageSrc: "/imgs/team/tiffany_andriamiharimanana.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/tiffany-soa-andriamiharimanana/"
        }
    },
    {
        id: 14,
        name: "Mridani Kashyap (Dani)",
        position: "Director of Marketing",
        intro: "Marketing student passionate about creative storytelling and audience engagement.",
        imageSrc: "/imgs/team/mridani_kashyap.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/mridani-kashyap"
        }
    },
    {
        id: 15,
        name: "Alisa Ignatina",
        position: "Director of Events",
        intro: "Data Science student passionate about designing engaging, memorable experiences for participants.",
        imageSrc: "/imgs/team/alisa_ignatina.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/alisa-ignatina",
            github: "https://github.com/alisaign",
            instagram: "https://www.instagram.com/alisaa_ign?igsh=dDRpcW0ydmI0d2Fp"
        }
    },
    {
        id: 16,
        name: "Huseyin Pilavci",
        position: "Director of Logistics",
        intro: "BCompSc student dedicated to seamless event planning and operational efficiency.",
        imageSrc: "/imgs/team/huseyin_pilavci.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/huseyin-pilavci"
        }
    },
    {
        id: 17,
        name: "Janani Thiyagarajah",
        position: "Director of Marketing",
        intro: "Industrial Engineering student focused on impactful brand strategies and outreach.",
        imageSrc: "/imgs/team/janani_thiyagarajah.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/janani-thiyagarajah"
        }
    },
    {
        id: 18,
        name: "Mijan Ullah",
        position: "Director of Technology",
        intro: "SOEN student focused on backend development.",
        imageSrc: "/imgs/team/mijan.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/mijan-ullah-4b99b3298/",
            github: "https://github.com/mijanullah12",
        }
    },
    {
        id: 19,
        name: "Subaanky Krishnapillai",
        position: "Director of Sponsorship",
        intro: "SOEN student working to strengthen corporate relationships and ensure event success.",
        imageSrc: "/imgs/team/subaanky_krishnapillai.jpg",
        socials: {
            linkedin: "https://www.linkedin.com/in/subaankykrishnapillai",
            github: "http://github.com/Subaanky"
        }
    }
];