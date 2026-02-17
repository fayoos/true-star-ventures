export interface Industry {
    id: number;
    name: string;
    description: string;
    icon: string;
}

export const industries: Industry[] = [
    {
        id: 1,
        name: 'Construction & Real Estate',
        description: 'Turnkey solutions for developers, contractors, and property managers from foundation to fit-out.',
        icon: 'building-tower'
    },
    {
        id: 2,
        name: 'Healthcare',
        description: 'Specialized systems for clinics, hospitals, and medical facilities meeting stringent regulatory standards.',
        icon: 'health'
    },
    {
        id: 3,
        name: 'Corporate Offices',
        description: 'Modern workplace infrastructure combining IT, facilities, and design for productivity.',
        icon: 'office'
    },
    {
        id: 4,
        name: 'Industrial & Warehousing',
        description: 'Heavy-duty solutions for logistics, manufacturing, and distribution centers.',
        icon: 'warehouse'
    },
    {
        id: 5,
        name: 'Retail & Hospitality',
        description: 'Customer-facing environments engineered for experience, safety, and operational efficiency.',
        icon: 'retail'
    },
    {
        id: 6,
        name: 'Government & Large Projects',
        description: 'Public infrastructure and institutional projects delivered with accountability and compliance.',
        icon: 'landmark'
    }
];
