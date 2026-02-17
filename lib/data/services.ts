export interface Service {
    id: number;
    category: string;
    name: string;
    description: string;
    icon: string;
}

export const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'construction', label: 'Construction & Engineering' },
    { id: 'modular', label: 'Modular & Site Solutions' },
    { id: 'maintenance', label: 'Maintenance & Facilities' },
    { id: 'it', label: 'IT & Security' },
    { id: 'digital-transform', label: 'Digital Transformation' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'trading', label: 'General Trading' },
    { id: 'contracting', label: 'General Contracting' },
];

export const services: Service[] = [
    // Construction & Engineering (16 services)
    {
        id: 1,
        category: 'construction',
        name: 'Aluminium Interiors',
        description: 'Premium aluminium solutions for modern commercial and residential spaces with precision engineering.',
        icon: 'wrench'
    },
    {
        id: 2,
        category: 'construction',
        name: 'Curtain Walls',
        description: 'High-performance facade systems combining aesthetics with energy efficiency and weather protection.',
        icon: 'building'
    },
    {
        id: 3,
        category: 'construction',
        name: 'Balustrades & Pergolas',
        description: 'Custom-designed architectural features that enhance safety while adding visual appeal.',
        icon: 'grid'
    },
    {
        id: 4,
        category: 'modular',
        name: 'Porta Cabin & Mobile Offices',
        description: 'Rapid deployment modular workspaces engineered for flexibility and durability.',
        icon: 'box'
    },
    {
        id: 5,
        category: 'construction',
        name: 'Parking Canopies',
        description: 'Structural shade solutions protecting vehicles while complementing architectural design.',
        icon: 'umbrella'
    },
    {
        id: 6,
        category: 'construction',
        name: 'MEP Projects',
        description: 'Complete mechanical, electrical, and plumbing systems designed for operational excellence.',
        icon: 'power'
    },
    {
        id: 7,
        category: 'construction',
        name: 'Steel Fabrication',
        description: 'Precision structural steelwork from concept through installation for industrial and commercial projects.',
        icon: 'layers'
    },
    {
        id: 8,
        category: 'construction',
        name: 'Marble and Tiles Laying',
        description: 'Expert installation of premium flooring materials with meticulous attention to detail.',
        icon: 'square'
    },
    {
        id: 9,
        category: 'construction',
        name: 'Civil Works',
        description: 'Foundation to finish civil engineering for infrastructure and building projects.',
        icon: 'tool'
    },
    {
        id: 10,
        category: 'construction',
        name: 'HVAC',
        description: 'Climate control systems engineered for comfort, efficiency, and air quality.',
        icon: 'fan'
    },
    {
        id: 11,
        category: 'construction',
        name: 'Equipment Rental',
        description: 'Wide range of construction machinery and equipment available with flexible rental terms.',
        icon: 'truck'
    },
    {
        id: 12,
        category: 'construction',
        name: 'Asphalt Works',
        description: 'Professional paving, surfacing, and road construction with quality materials and expertise.',
        icon: 'road'
    },
    {
        id: 13,
        category: 'construction',
        name: 'Supply and Apply Services',
        description: 'End-to-end material procurement and installation for complete project delivery.',
        icon: 'package'
    },
    {
        id: 14,
        category: 'construction',
        name: 'Uniform and Industrial Tailoring Services',
        description: 'Professional workwear solutions custom-tailored for your team and brand identity.',
        icon: 'shirt'
    },
    {
        id: 15,
        category: 'maintenance',
        name: 'AMC – Annual Maintenance Contracts',
        description: 'Comprehensive preventive maintenance programs ensuring continuous operation and asset longevity.',
        icon: 'calendar'
    },
    {
        id: 16,
        category: 'construction',
        name: 'Customized Kitchen Equipments',
        description: 'Bespoke commercial kitchen solutions designed for efficiency and hygiene compliance.',
        icon: 'chef'
    },

    // IT Solutions (8 services)
    {
        id: 17,
        category: 'it',
        name: 'Complete IT Projects',
        description: 'Turnkey technology infrastructure from planning through deployment and support.',
        icon: 'server'
    },
    {
        id: 18,
        category: 'it',
        name: 'Structured Cabling',
        description: 'Enterprise-grade network infrastructure built for performance, scalability, and future-readiness.',
        icon: 'cable'
    },
    {
        id: 19,
        category: 'it',
        name: 'Startup & Office Deployment',
        description: 'Rapid IT setup services getting your workspace operational from day one.',
        icon: 'rocket'
    },
    {
        id: 20,
        category: 'it',
        name: 'Medical Device Integration',
        description: 'Specialized healthcare IT solutions ensuring compliance and seamless clinical workflows.',
        icon: 'medical'
    },
    {
        id: 21,
        category: 'digital-transform',
        name: 'Cloud Solutions',
        description: 'Secure, scalable cloud migration and management reducing infrastructure overhead.',
        icon: 'cloud'
    },
    {
        id: 22,
        category: 'it',
        name: 'System Maintenance',
        description: 'Proactive IT health monitoring and optimization keeping your systems running smoothly.',
        icon: 'settings'
    },
    {
        id: 23,
        category: 'it',
        name: 'CCTV & Security Solutions',
        description: 'Advanced surveillance and access control systems protecting your assets 24/7.',
        icon: 'camera'
    },
    {
        id: 24,
        category: 'it',
        name: '24/7 IT Support',
        description: 'Round-the-clock technical assistance ensuring minimal downtime and rapid issue resolution.',
        icon: 'support'
    },

    // Digital Transformation (5 services)
    {
        id: 25,
        category: 'digital-transform',
        name: 'Domain & Website Hosting + Company Emails',
        description: 'Professional web presence and email infrastructure establishing your digital identity.',
        icon: 'globe'
    },
    {
        id: 26,
        category: 'digital-transform',
        name: 'Paperless Workflows + Cloud Access',
        description: 'Digital document management systems enabling remote collaboration and efficiency.',
        icon: 'workflow'
    },
    {
        id: 27,
        category: 'digital-transform',
        name: 'Bulk Scanning & OCR Digitization',
        description: 'High-volume document conversion making historical records searchable and accessible.',
        icon: 'scan'
    },
    {
        id: 28,
        category: 'digital-transform',
        name: 'Secure Cloud & Local Archiving',
        description: 'Hybrid data protection strategies ensuring business continuity and compliance.',
        icon: 'archive'
    },
    {
        id: 29,
        category: 'digital-transform',
        name: 'Digital Workflow Automation',
        description: 'Process automation tools eliminating manual tasks and accelerating operations.',
        icon: 'automation'
    },

    // Digital Marketing (8 services)
    {
        id: 30,
        category: 'digital-marketing',
        name: 'Social Media Strategy',
        description: 'Data-driven campaigns building engaged communities and amplifying brand reach.',
        icon: 'social'
    },
    {
        id: 31,
        category: 'digital-marketing',
        name: 'Creative Content',
        description: 'Compelling visual and written narratives that resonate with your target audience.',
        icon: 'content'
    },
    {
        id: 32,
        category: 'digital-marketing',
        name: 'Graphic Design',
        description: 'Professional brand assets from logos to marketing collateral crafted for impact.',
        icon: 'palette'
    },
    {
        id: 33,
        category: 'digital-marketing',
        name: 'Digital Ad Campaigns',
        description: 'Targeted PPC and display advertising optimized for ROI and conversion.',
        icon: 'megaphone'
    },
    {
        id: 34,
        category: 'digital-marketing',
        name: 'Lead Conversion',
        description: 'Funnel optimization and CRM integration turning prospects into customers.',
        icon: 'funnel'
    },
    {
        id: 35,
        category: 'digital-marketing',
        name: 'WhatsApp Marketing',
        description: 'Direct customer engagement through automated messaging and broadcast campaigns.',
        icon: 'message'
    },
    {
        id: 36,
        category: 'digital-marketing',
        name: 'Email Marketing',
        description: 'Personalized email sequences nurturing leads and driving repeat business.',
        icon: 'mail'
    },
    {
        id: 37,
        category: 'digital-marketing',
        name: 'Web & Online Presence',
        description: 'Websites and digital experiences engineered to engage, convert, and perform.',
        icon: 'web'
    },

    // General Trading (5 services)
    {
        id: 38,
        category: 'trading',
        name: 'Computer & Printer Accessories',
        description: 'Quality IT peripherals and consumables ensuring your technology runs smoothly.',
        icon: 'computer'
    },
    {
        id: 39,
        category: 'trading',
        name: 'Filing & Desk Accessories',
        description: 'Organizational tools and workspace essentials promoting productivity and order.',
        icon: 'folder'
    },
    {
        id: 40,
        category: 'trading',
        name: 'Writing Instruments & Paper Products',
        description: 'Premium stationery supplies for everyday professional needs.',
        icon: 'pen'
    },
    {
        id: 41,
        category: 'trading',
        name: 'Office Furniture & Equipment',
        description: 'Ergonomic furniture and fixtures creating comfortable, efficient workspaces.',
        icon: 'desk'
    },
    {
        id: 42,
        category: 'trading',
        name: 'Break Room & Cleaning Supplies',
        description: 'Facility essentials maintaining cleanliness and employee well-being.',
        icon: 'supplies'
    },

    // General Contracting (4 services)
    {
        id: 43,
        category: 'contracting',
        name: 'Civil & Infrastructure Works',
        description: 'Large-scale infrastructure development from roads to utilities with proven methodology.',
        icon: 'infrastructure'
    },
    {
        id: 44,
        category: 'contracting',
        name: 'Electromechanical Solutions',
        description: 'Integrated electrical and mechanical systems for complex projects.',
        icon: 'electric'
    },
    {
        id: 45,
        category: 'contracting',
        name: 'Interior Design & Fit-Out',
        description: 'Turnkey interior solutions transforming spaces with style and functionality.',
        icon: 'interior'
    },
    {
        id: 46,
        category: 'contracting',
        name: 'Support Services',
        description: 'Comprehensive project support ensuring smooth execution and timely delivery.',
        icon: 'support-team'
    },

    // Facility Management (4 services)
    {
        id: 47,
        category: 'maintenance',
        name: 'Building Operations',
        description: 'Daily facility management ensuring optimal building performance and tenant satisfaction.',
        icon: 'operations'
    },
    {
        id: 48,
        category: 'maintenance',
        name: 'Preventive & Corrective Maintenance',
        description: 'Scheduled inspections and rapid repairs minimizing downtime and extending asset life.',
        icon: 'maintenance'
    },
    {
        id: 49,
        category: 'maintenance',
        name: 'Cleaning & Hygiene Services',
        description: 'Professional cleaning programs maintaining pristine, healthy environments.',
        icon: 'clean'
    },
    {
        id: 50,
        category: 'maintenance',
        name: 'Security & Monitoring',
        description: 'Trained personnel and systems protecting your property and people around the clock.',
        icon: 'shield'
    },
];
