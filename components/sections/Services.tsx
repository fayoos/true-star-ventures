'use client';

const allCategories = [
    {
        id: 'all',
        label: 'ALL SERVICES',
        icon: '📋',
        description: 'Explore our complete range of integrated solutions across all departments and specializations.',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        glowColor: '#667eea',
    },
    {
        id: 'construction',
        label: 'CONSTRUCTION & ENGINEERING',
        icon: '🏗️',
        description: 'Turnkey construction projects, MEP services, steel fabrication, and civil engineering excellence.',
        gradient: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
        glowColor: '#3B82F6',
    },
    {
        id: 'modular',
        label: 'MODULAR & SITE SOLUTIONS',
        icon: '🏢',
        description: 'Portable cabins, mobile offices, and rapid deployment modular workspaces for flexible operations.',
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
        glowColor: '#8B5CF6',
    },
    {
        id: 'maintenance',
        label: 'MAINTENANCE & FACILITIES',
        icon: '🔧',
        description: 'Comprehensive building operations, preventive maintenance, and facility management solutions.',
        gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        glowColor: '#10B981',
    },
    {
        id: 'it',
        label: 'IT & SECURITY',
        icon: '💻',
        description: 'Complete IT infrastructure, CCTV security systems, and 24/7 technical support services.',
        gradient: 'linear-gradient(135deg, #00A896 0%, #028174 100%)',
        glowColor: '#00A896',
    },
    {
        id: 'digital-transform',
        label: 'DIGITAL TRANSFORMATION',
        icon: '☁️',
        description: 'Cloud solutions, paperless workflows, and digital archiving for modern business operations.',
        gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        glowColor: '#06B6D4',
    },
    {
        id: 'digital-marketing',
        label: 'DIGITAL MARKETING',
        icon: '📱',
        description: 'Social media strategy, creative content, ad campaigns, and web presence optimization.',
        gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        glowColor: '#F59E0B',
    },
    {
        id: 'trading',
        label: 'GENERAL TRADING',
        icon: '📦',
        description: 'Office supplies, computer accessories, furniture, and facility essentials procurement.',
        gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
        glowColor: '#EF4444',
    },
    {
        id: 'contracting',
        label: 'GENERAL CONTRACTING',
        icon: '🏗️',
        description: 'Civil infrastructure, electromechanical solutions, interior fit-outs, and project support.',
        gradient: 'linear-gradient(135deg, #F2C94C 0%, #D4A42C 100%)',
        glowColor: '#F2C94C',
    },
];

export default function Services() {
    return (
        <section id="services" className="section" style={{ background: 'var(--background)', transition: 'background 0.3s ease' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div
                        className="fade-in-up"
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(0, 51, 102, 0.05)',
                            borderRadius: '30px',
                            color: 'var(--primary)',
                            fontWeight: '600',
                            fontSize: '0.85rem',
                            letterSpacing: '0.05em',
                            marginBottom: '1.5rem',
                        }}
                    >
                        OUR EXPERTISE
                    </div>

                    <h2
                        className="section-heading fade-in-up"
                        style={{
                            marginBottom: '1.5rem',
                            color: 'var(--primary)',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        }}
                    >
                        COMPREHENSIVE <span style={{ background: 'linear-gradient(135deg, #F2C94C, #D4A42C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SOLUTIONS</span>
                    </h2>

                    <p
                        className="fade-in-up"
                        style={{
                            color: 'var(--muted)',
                            fontSize: '1.15rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}
                    >
                        We deliver integrated services across the entire project lifecycle, from initial concept to final execution and maintenance.
                    </p>
                </div>

                {/* 9 Category Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        padding: '0 1rem',
                    }}
                >
                    {allCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className="service-card-electric"
                            style={{
                                padding: '2rem',
                                animationDelay: `${index * 0.05}s`,
                                display: 'flex',
                                flexDirection: 'column',
                                background: `linear-gradient(145deg, white 0%, ${category.glowColor}08 100%)`,
                                borderRadius: '16px',
                                border: '2px solid #f0f0f0',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'visible',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                                ['--card-glow-color' as any]: category.glowColor,
                            }}
                        >
                            {/* Top Gradient Border */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '6px',
                                background: category.gradient,
                                borderRadius: '16px 16px 0 0',
                            }} />

                            {/* Icon with Gradient Background */}
                            <div
                                style={{
                                    width: '70px',
                                    height: '70px',
                                    background: category.gradient,
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.25rem',
                                    fontSize: '2rem',
                                    boxShadow: `0 8px 20px ${category.glowColor}40`,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                }}
                                className="service-icon-electric"
                            >
                                {category.icon}
                            </div>

                            <h3
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1.35rem',
                                    marginBottom: '0.75rem',
                                    color: 'var(--primary)',
                                    letterSpacing: '0.05em',
                                    lineHeight: 1.2,
                                }}
                            >
                                {category.label}
                            </h3>

                            <p
                                style={{
                                    color: 'var(--muted)',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.6',
                                    fontSize: '0.9rem',
                                    flex: 1,
                                }}
                            >
                                {category.description}
                            </p>

                            <a
                                href={`/services?category=${category.id}`}
                                style={{
                                    color: category.glowColor,
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem',
                                    marginTop: 'auto',
                                    fontFamily: 'var(--font-body)',
                                    transition: 'gap 0.3s ease',
                                }}
                                className="service-link-electric"
                            >
                                Explore Category <span className="arrow">→</span>
                            </a>
                        </div>
                    ))}
                </div>

                <div
                    className="fade-in-up"
                    style={{
                        textAlign: 'center',
                        marginTop: '4rem',
                        animationDelay: '0.5s'
                    }}
                >
                    <a href="/services" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                        VIEW FULL SERVICE CATALOG
                    </a>
                </div>
            </div>

            <style jsx>{`
                /* Electrifying Border Animation on Hover */
                @keyframes electric-pulse {
                    0%, 100% {
                        box-shadow: 0 0 5px var(--card-glow-color), 
                                    0 0 10px var(--card-glow-color), 
                                    0 0 15px var(--card-glow-color),
                                    0 2px 8px rgba(0, 0, 0, 0.04);
                    }
                    50% {
                        box-shadow: 0 0 10px var(--card-glow-color), 
                                    0 0 20px var(--card-glow-color), 
                                    0 0 30px var(--card-glow-color), 
                                    0 0 40px var(--card-glow-color),
                                    0 8px 16px rgba(0, 0, 0, 0.1);
                    }
                }

                .service-card-electric:hover {
                    transform: translateY(-8px);
                    border-color: var(--card-glow-color);
                    animation: electric-pulse 1.5s ease-in-out infinite;
                }

                /* Icon Animation */
                .service-card-electric:hover .service-icon-electric {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
                }

                /* Link Arrow Animation */
                .service-card-electric:hover .service-link-electric {
                    gap: 0.75rem;
                }

                .service-link-electric .arrow {
                    transition: transform 0.3s ease;
                }

                .service-card-electric:hover .service-link-electric .arrow {
                    transform: translateX(5px);
                }

                @media (max-width: 768px) {
                    .service-card-electric {
                        padding: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
