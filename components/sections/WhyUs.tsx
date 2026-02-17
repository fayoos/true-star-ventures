'use client';

export default function WhyUs() {
    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '15+', label: 'Years Experience' },
        { number: '300+', label: 'Happy Clients' },
        { number: '24/7', label: 'Support Available' },
    ];

    const reasons = [
        {
            icon: '🎯',
            title: 'Turnkey, Multi-Division Capability',
            description: 'One partner for construction, IT, digital, and facility management—eliminating coordination complexity and reducing costs.',
            gradient: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
            glowColor: '#3B82F6',
        },
        {
            icon: '✅',
            title: 'Quality & Safety-First Execution',
            description: 'Rigorous international standards, proven methodologies, and zero-compromise safety culture on every single project we deliver.',
            gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            glowColor: '#10B981',
        },
        {
            icon: '💬',
            title: 'Clear Communication & Transparency',
            description: 'Regular updates, detailed reporting, and honest dialogue throughout your project lifecycle. No surprises, just results.',
            gradient: 'linear-gradient(135deg, #F2C94C 0%, #D4A42C 100%)',
            glowColor: '#F2C94C',
        },
        {
            icon: '⚡',
            title: 'Skilled Teams + Scalable Delivery',
            description: 'Experienced professionals backed by flexible resources to meet tight deadlines and rapidly changing project requirements.',
            gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
            glowColor: '#8B5CF6',
        },
        {
            icon: '🔧',
            title: 'Preventive Maintenance Mindset',
            description: 'Proactive AMCs and monitoring programs minimizing downtime and extending asset life across all your facilities.',
            gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
            glowColor: '#EF4444',
        },
        {
            icon: '🤝',
            title: 'Long-Term Partnership Approach',
            description: '24/7 rapid response teams, ongoing optimization, and dedicated account managers—we\'re with you long beyond project handover.',
            gradient: 'linear-gradient(135deg, #00A896 0%, #028174 100%)',
            glowColor: '#00A896',
        },
        {
            icon: '🌍',
            title: 'Regional Expertise & Local Knowledge',
            description: 'Deep understanding of Saudi Arabia\'s regulatory environment, local supply chains, and cultural business practices.',
            gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
            glowColor: '#06B6D4',
        },
        {
            icon: '💡',
            title: 'Innovation-Driven Solutions',
            description: 'Embracing latest technologies, smart building systems, and digital-first approaches to deliver cutting-edge results.',
            gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
            glowColor: '#F59E0B',
        },
    ];

    return (
        <section id="why-us" className="section" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                        WHY CHOOSE US
                    </div>

                    <h2
                        className="section-heading fade-in-up"
                        style={{
                            marginBottom: '1.5rem',
                            color: 'var(--primary)',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        }}
                    >
                        Why Choose <span style={{ background: 'linear-gradient(135deg, #F2C94C, #D4A42C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TRUE STAR VENTURES</span>
                    </h2>

                    <p
                        className="fade-in-up"
                        style={{
                            color: 'var(--muted)',
                            fontSize: '1.15rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: '1.7',
                        }}
                    >
                        Proven expertise, integrated capabilities, and unwavering commitment to your success. Here&apos;s what sets us apart from the competition.
                    </p>
                </div>

                {/* Stats Bar */}
                <div
                    className="fade-in-up"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1.5rem',
                        marginBottom: '4rem',
                        padding: '2.5rem 2rem',
                        background: 'linear-gradient(135deg, #003366 0%, #004080 50%, #003366 100%)',
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0, 51, 102, 0.15)',
                    }}
                >
                    {stats.map((stat, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                color: '#F2C94C',
                                letterSpacing: '0.02em',
                                lineHeight: 1,
                                marginBottom: '0.5rem',
                            }}>
                                {stat.number}
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontWeight: '500',
                                letterSpacing: '0.02em',
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reasons Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="why-card"
                            style={{
                                background: 'white',
                                borderRadius: '16px',
                                padding: '2rem',
                                position: 'relative',
                                overflow: 'hidden',
                                border: '2px solid #f0f0f0',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'default',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                                ['--why-glow' as any]: reason.glowColor,
                            }}
                        >
                            {/* Top gradient accent */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '5px',
                                background: reason.gradient,
                            }} />

                            <div
                                style={{
                                    width: '65px',
                                    height: '65px',
                                    background: reason.gradient,
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.25rem',
                                    fontSize: '1.75rem',
                                    boxShadow: `0 8px 20px ${reason.glowColor}30`,
                                    transition: 'transform 0.3s ease',
                                }}
                                className="why-icon"
                            >
                                {reason.icon}
                            </div>

                            <h3
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1.35rem',
                                    marginBottom: '0.75rem',
                                    color: 'var(--primary)',
                                    letterSpacing: '0.04em',
                                    lineHeight: 1.2,
                                }}
                            >
                                {reason.title}
                            </h3>

                            <p style={{
                                color: 'var(--muted)',
                                lineHeight: '1.65',
                                fontSize: '0.9rem',
                            }}>
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Trust CTA */}
                <div
                    className="fade-in-up"
                    style={{
                        textAlign: 'center',
                        marginTop: '4rem',
                        padding: '3rem 2rem',
                        background: 'linear-gradient(135deg, rgba(0, 51, 102, 0.03) 0%, rgba(242, 201, 76, 0.05) 100%)',
                        borderRadius: '20px',
                        border: '1px solid rgba(0, 51, 102, 0.08)',
                    }}
                >
                    <p style={{
                        color: 'var(--primary)',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        fontFamily: 'var(--font-bebas)',
                        letterSpacing: '0.05em',
                        fontSize: '1.75rem',
                        textAlign: 'center',
                    }}>
                        READY TO PARTNER WITH EXCELLENCE?
                    </p>
                    <p style={{
                        color: 'var(--muted)',
                        maxWidth: '600px',
                        margin: '0 auto 2rem',
                        lineHeight: '1.6',
                    }}>
                        Join hundreds of satisfied clients who trust TRUE STAR VENTURES for their most critical projects.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                            GET A FREE QUOTE
                        </a>
                        <a href="https://wa.me/966505447209" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                            💬 CHAT WITH US
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .why-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--why-glow);
                    box-shadow: 0 0 8px var(--why-glow), 0 0 16px var(--why-glow), 0 20px 40px -10px rgba(0, 0, 0, 0.1);
                }

                .why-card:hover .why-icon {
                    transform: scale(1.1) rotate(5deg);
                }

                @media (max-width: 768px) {
                    .why-card {
                        padding: 1.5rem !important;
                    }
                }

                @media (max-width: 600px) {
                    div[style*="grid-template-columns: repeat(4"] {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    );
}
