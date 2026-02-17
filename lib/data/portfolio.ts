export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    description: string;
    details: string;
}

export const portfolio: PortfolioItem[] = [
    {
        id: 1,
        title: 'Commercial Tower Fit-Out',
        category: 'Construction & Engineering',
        description: 'Complete interior build-out for 12-story commercial building including MEP and aluminium works.',
        details: 'Delivered a turnkey solution encompassing structural modifications, MEP systems installation, premium aluminium interiors, and custom millwork. Project completed on schedule with zero safety incidents across 18 months of active construction.'
    },
    {
        id: 2,
        title: 'Healthcare IT Infrastructure',
        category: 'IT Solutions',
        description: 'Hospital-wide network upgrade with medical device integration and 24/7 monitoring.',
        details: 'Implemented enterprise-grade structured cabling, secure data centers, and integrated clinical systems across 200+ endpoints. Solution achieved 99.9% uptime certification and full HIPAA compliance readiness.'
    },
    {
        id: 3,
        title: 'Modular Site Office Complex',
        category: 'Modular Solutions',
        description: '24-unit porta cabin facility for major infrastructure project with full utilities.',
        details: 'Rapid deployment of climate-controlled mobile offices with power, HVAC, and IT connectivity. Complex operational within 3 weeks from contract award, accommodating 100+ site personnel.'
    },
    {
        id: 4,
        title: 'Digital Transformation Initiative',
        category: 'Digital Services',
        description: 'Enterprise paperless workflow implementation with cloud migration for logistics company.',
        details: 'Digitized 15 years of historical documents (500,000+ pages), implemented cloud document management, and automated 12 core business processes. Client achieved 40% reduction in administrative overhead within 6 months.'
    },
    {
        id: 5,
        title: 'Multi-Site Facility Management',
        category: 'Facility Management',
        description: 'Comprehensive AMC covering 8 retail locations with preventive maintenance and rapid response.',
        details: 'Integrated facility management program including HVAC, electrical, plumbing, cleaning, and security services. Delivered 30% cost savings versus previous vendor while improving service quality metrics.'
    },
    {
        id: 6,
        title: 'Brand Launch Campaign',
        category: 'Digital Marketing',
        description: 'Full-spectrum marketing for new F&B concept including website, social media, and PPC.',
        details: 'Developed brand identity, built responsive website, executed social media strategy, and ran targeted ad campaigns. Generated 5,000+ leads and contributed to successful grand opening with 200% ROI in first quarter.'
    }
];
