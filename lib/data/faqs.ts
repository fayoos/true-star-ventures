export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        id: 1,
        question: 'What areas do you serve?',
        answer: 'We serve clients across the region with rapid mobilization capabilities. Our teams handle projects locally and can deploy resources to remote sites as needed.'
    },
    {
        id: 2,
        question: 'Do you provide AMCs and ongoing support?',
        answer: 'Yes, we offer comprehensive Annual Maintenance Contracts and 24/7 support services. Our preventive maintenance programs keep your systems running efficiently with minimal downtime.'
    },
    {
        id: 3,
        question: 'Can you handle both construction and IT in one project?',
        answer: 'Absolutely. Our multidisciplinary approach means you get a single point of accountability for construction, IT infrastructure, digital services, and ongoing facility management—streamlining coordination and delivery.'
    },
    {
        id: 4,
        question: 'How do you estimate project cost and timeline?',
        answer: 'We conduct thorough site assessments and requirements analysis before providing detailed proposals. Our estimates include transparent breakdowns and realistic timelines based on proven project methodologies.'
    },
    {
        id: 5,
        question: 'Do you support urgent maintenance and emergency calls?',
        answer: 'Yes, we maintain rapid response teams for urgent repairs and emergency situations. Our 24/7 support ensures critical issues are addressed immediately to minimize operational impact.'
    },
    {
        id: 6,
        question: 'How do we start working together?',
        answer: 'Simply reach out via the contact form, WhatsApp, or phone. We\'ll schedule a consultation to understand your needs, conduct site visits if required, and provide a comprehensive proposal within 24-48 hours.'
    }
];
