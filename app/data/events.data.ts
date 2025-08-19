export type Event = {
    id: number;
    date: string;
    month: string;
    year: string;
    title: string;
    type: string;
    time: string;
    location: string;
    address: string;
    highlight?: boolean;
};

export const events: Event[] = [
    // FALL 2025
    {
        id: 1,
        date: '12',
        month: 'September',
        year: '2025',
        title: 'HackDécouverte',
        type: 'Mini‑Hackathon',
        time: 'Full Day',
        location: 'Concordia University',
        address: 'SGW Campus, Montreal',
        highlight: true,
    },
    {
        id: 2,
        date: '30',
        month: 'September',
        year: '2025',
        title: 'Lizard Lounge Social',
        type: 'Mixer',
        time: 'Evening',
        location: 'Reggie’s Bar (SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    {
        id: 3,
        date: '15',
        month: 'November',
        year: '2025',
        title: 'ConUHacks X Launch Party',
        type: 'Registration Launch Event',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'Reggie’s Bar / Terrace (SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    {
        id: 4,
        date: '22',
        month: 'November',
        year: '2025',
        title: 'Workshop 1',
        type: 'Workshop',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'H-1011 (Hall Building, SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    {
        id: 5,
        date: '30',
        month: 'November',
        year: '2025',
        title: 'Workshop 2',
        type: 'Workshop',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'H-1011 (Hall Building, SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    // WINTER 2026
    {
        id: 6,
        date: '24',
        month: 'January',
        year: '2026',
        title: 'ConUHacks X',
        type: '24‑Hour Hackathon',
        time: '8 AM (24th Jan) - 11 AM (25th Jan)',
        location: 'Concordia University (John Molson MB)',
        address: '1455 Boulevard de Maisonneuve, Montreal',
    },
    {
        id: 7,
        date: '01',
        month: 'February',
        year: '2026',
        title: 'Lightning Learning',
        type: 'Tech Social',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'tbd',
        address: 'Concordia University, Montreal',
    },
    {
        id: 8,
        date: '07',
        month: 'February',
        year: '2026',
        title: 'Wine & Cheese Mixer',
        type: 'Social Mixer',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'tbd',
        address: 'Concordia University, Montreal',
    },
    {
        id: 9,
        date: '22',
        month: 'March',
        year: '2026',
        title: 'Workshop 1 (Winter)',
        type: 'Workshop',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'H-1011 (Hall Building, SGW Campus)',
        address: 'Concordia University, Montreal',
    },
    {
        id: 10,
        date: '05',
        month: 'April',
        year: '2026',
        title: 'Workshop 2 (Winter)',
        type: 'Workshop',
        time: 'Evening (5:30 PM–7:30 PM)',
        location: 'H-1011 (Hall Building, SGW Campus)',
        address: 'Concordia University, Montreal',
    },
];
