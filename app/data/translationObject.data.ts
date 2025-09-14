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

    Faq: {
        contactUs: string;
        description: string;
        title: string;
        question: {
            conuhacks: string;
            elligibility: string;
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
            elligibility: string;
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