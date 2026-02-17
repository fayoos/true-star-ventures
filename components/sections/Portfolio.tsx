'use client';

import { useState } from 'react';
import { portfolio } from '@/lib/data/portfolio';

const categoryColors: Record<string, { gradient: string; glow: string }> = {
    'Construction': { gradient: 'linear-gradient(135deg, #3B82F6, #1E40AF)', glow: '#3B82F6' },
    'IT Infrastructure': { gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)', glow: '#8B5CF6' },
    'Digital Services': { gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)', glow: '#06B6D4' },
    'Facility Management': { gradient: 'linear-gradient(135deg, #10B981, #059669)', glow: '#10B981' },
    'Modular Solutions': { gradient: 'linear-gradient(135deg, #F59E0B, #D97706)', glow: '#F59E0B' },
    'Engineering': { gradient: 'linear-gradient(135deg, #EF4444, #DC2626)', glow: '#EF4444' },
};

function getCategoryColor(category: string) {
    return categoryColors[category] || { gradient: 'linear-gradient(135deg, #F2C94C, #D4A42C)', glow: '#F2C94C' };
}

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    return (
        <section id="portfolio" className="section" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
                        OUR WORK
                    </div>

                    <h2
                        className="section-heading fade-in-up"
                        style={{
                            marginBottom: '1.5rem',
                            color: 'var(--primary)',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        }}
                    >
                        Our <span style={{ background: 'linear-gradient(135deg, #F2C94C, #D4A42C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Portfolio</span>
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
                        Representative projects showcasing our multidisciplinary capabilities and commitment to excellence across Saudi Arabia.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {portfolio.map((project, index) => {
                        const colors = getCategoryColor(project.category);
                        return (
                            <div
                                key={project.id}
                                className="portfolio-card"
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '2px solid #f0f0f0',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    ['--portfolio-glow' as any]: colors.glow,
                                }}
                                onClick={() => setSelectedProject(project.id)}
                            >
                                {/* Top gradient bar */}
                                <div style={{
                                    height: '6px',
                                    background: colors.gradient,
                                }} />

                                <div style={{ padding: '2rem' }}>
                                    {/* Category Tag */}
                                    <div
                                        style={{
                                            display: 'inline-block',
                                            padding: '0.4rem 1rem',
                                            background: colors.gradient,
                                            color: 'white',
                                            borderRadius: '20px',
                                            fontFamily: 'var(--font-bebas)',
                                            fontSize: '0.8rem',
                                            letterSpacing: '0.06em',
                                            marginBottom: '1.25rem',
                                        }}
                                    >
                                        {project.category}
                                    </div>

                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-bebas)',
                                            fontSize: '1.5rem',
                                            marginBottom: '0.75rem',
                                            color: 'var(--primary)',
                                            letterSpacing: '0.04em',
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {project.title}
                                    </h3>

                                    <p style={{
                                        color: 'var(--muted)',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.65',
                                        fontSize: '0.9rem',
                                    }}>
                                        {project.description}
                                    </p>

                                    <div
                                        className="portfolio-link"
                                        style={{
                                            color: colors.glow,
                                            fontWeight: '600',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            transition: 'gap 0.3s ease',
                                        }}
                                    >
                                        View Case Study <span className="portfolio-arrow">→</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    onClick={() => setSelectedProject(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 15, 40, 0.85)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2000,
                        padding: '2rem',
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'white',
                            borderRadius: '20px',
                            padding: '2.5rem',
                            maxWidth: '700px',
                            width: '100%',
                            maxHeight: '80vh',
                            overflow: 'auto',
                            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        {portfolio
                            .filter((p) => p.id === selectedProject)
                            .map((project) => {
                                const colors = getCategoryColor(project.category);
                                return (
                                    <div key={project.id}>
                                        <div
                                            style={{
                                                display: 'inline-block',
                                                padding: '0.4rem 1rem',
                                                background: colors.gradient,
                                                color: 'white',
                                                borderRadius: '20px',
                                                fontFamily: 'var(--font-bebas)',
                                                fontSize: '0.85rem',
                                                letterSpacing: '0.05em',
                                                marginBottom: '1.5rem',
                                            }}
                                        >
                                            {project.category}
                                        </div>

                                        <h2
                                            style={{
                                                fontFamily: 'var(--font-bebas)',
                                                fontSize: '2.5rem',
                                                marginBottom: '1.5rem',
                                                letterSpacing: '0.05em',
                                                color: 'var(--primary)',
                                            }}
                                        >
                                            {project.title}
                                        </h2>

                                        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.125rem' }}>
                                            {project.description}
                                        </p>

                                        <div
                                            style={{
                                                padding: '1.5rem',
                                                background: '#f8fafc',
                                                borderRadius: '12px',
                                                border: '1px solid #e2e8f0',
                                                marginBottom: '2rem',
                                            }}
                                        >
                                            <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '0.05em', color: 'var(--primary)' }}>
                                                Project Details
                                            </h4>
                                            <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                                {project.details}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="btn-primary"
                                            style={{ width: '100%' }}
                                        >
                                            Close
                                        </button>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}

            <style jsx>{`
                .portfolio-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--portfolio-glow);
                    box-shadow: 0 0 8px var(--portfolio-glow), 0 0 16px var(--portfolio-glow), 0 20px 40px -10px rgba(0, 0, 0, 0.1);
                }

                .portfolio-card:hover .portfolio-link {
                    gap: 0.75rem;
                }

                .portfolio-card:hover .portfolio-arrow {
                    transform: translateX(5px);
                }

                .portfolio-arrow {
                    transition: transform 0.3s ease;
                }

                @media (max-width: 768px) {
                    .portfolio-card div[style*="padding: 2rem"] {
                        padding: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
