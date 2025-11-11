export type TranslationObject = {
    Header: {
        home: string;
        conuhacks: string;
        events: string;
        team: string;
        faq: string;
    }
    AboutUs: {
        subtitle: string;
        paragraph: string;
        subscribe: string;
        emailPlaceholder: string;
        subscribeButton: string;
        checkboxLabelPrefix: string;
        codeOfConduct: string;
        buttonLoadingText: string;
        scrollDown: string;
        description: string;
        description2: string;
        description3: string;
    };

    ConuHacks: {
        winners: string;
        participants: string;
        projects: string;
        sponsors: string;
        mentors: string;
        slides: {
            [key: number]: {
                title: string;
                subtitle: string;
                others?: {
                    date: string;
                    location: string;
                    duration: string;
                    theme: string;
                    registration?: string;
                };
                winners?: {
                    [key: string]: {
                        position: string;
                        description: string;
                    };
                };
                tag?: string;
            };
        };
    };

    TeamMember: {
        title: string;
        description: string;
        legacyButton: string;
        members: {
            [key: number]: {
                name: string;
                position: string;
                intro: string;
            };
        };
    };

    UpcomingEvents: {
        title: string;
        subtitle: string;
        time: {
            fullDay: string;
            evening: string;
            eveningTime: string;
            hackWeekDays: string;
            conuhacksDays: string;
        };
        months:{
            January: string;
            February: string;
            March: string; 
            April: string;
            August: string;
            September: string;
            October: string;
            November: string;
            December: string;
        }; 
        address: {
            sgw: string;
            concordia: string;
            concordia_address: string;
            jmsb: string;
            jmsb_address: string;
            hall: string;
            hallBuilding: string;
            floor: string;
            reggies: string;
            terrace: string;
            threeB: string;
            threeB_address: string;
            tbd: string;
        }; 
        events: {
            [key: number]: {
                title: string;
                type: string;
            };
        };
    };

    Faq: {
        contactUs: string;
        description: string;
        title: string;
        question: {
            conuhacks: string;
            eligibility: string;
            team: string;
            coderCan: string;
            registrationFee: string;
            provided: string;
            prizes: string;
            project: string;
            codeOfConduct: string;
            help: string;
        };
        answer:{
            conuhacks: string;
            eligibility: string;
            team: string;
            coderCan: string;
            registrationFee: string;
            provided: string;
            prizes: string;
            project: string;
            codeOfConduct: string;
            help: string;
        };
    };

    Footer: {
        stillHaveQuestion: string;
        reachOut: string;
        getInTouch: string;
        rights: string;
        privacy: string;
        terms: string;
    };
};