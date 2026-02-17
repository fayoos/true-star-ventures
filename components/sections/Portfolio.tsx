'use client';

import { useState } from 'react';
import { portfolio } from '@/lib/data/portfolio';

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    return (
        <section id="portfolio" className="section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-heading">Our Portfolio</h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
                    Representative projects showcasing our multidisciplinary capabilities and commitment to excellence.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                }}
            >
                {portfolio.map((project, index) => (
                    <div
                        key={project.id}
                        className="card fade-in-up"
                        style={{
                            opacity: 0,
                            animationDelay: `${index * 0.1}s`,
                        }}
                    >
                        {/* Category Tag */}
                        <div
                            style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                background: 'var(--copper)',
                                color: 'var(--off-white)',
                                borderRadius: '4px',
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '0.875rem',
                                letterSpacing: '0.05em',
                                marginBottom: '1rem',
                            }}
                        >
                            {project.category}
                        </div>

                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {project.title}
                        </h3>

                        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            {project.description}
                        </p>

                        <button
                            onClick={() => setSelectedProject(project.id)}
                            className="btn-secondary"
                            style={{
                                width: '100%',
                            }}
                        >
                            View Case Study
                        </button>
                    </div>
                ))}
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
                        background: 'rgba(0, 0, 0, 0.8)',
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
                            background: 'var(--background)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '12px',
                            padding: '2.5rem',
                            maxWidth: '700px',
                            width: '100%',
                            maxHeight: '80vh',
                            overflow: 'auto',
                        }}
                    >
                        {portfolio
                            .filter((p) => p.id === selectedProject)
                            .map((project) => (
                                <div key={project.id}>
                                    <div
                                        style={{
                                            display: 'inline-block',
                                            padding: '0.5rem 1rem',
                                            background: 'var(--copper)',
                                            color: 'var(--off-white)',
                                            borderRadius: '4px',
                                            fontFamily: 'var(--font-bebas)',
                                            fontSize: '0.875rem',
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
                                            background: 'var(--card-bg)',
                                            borderRadius: '8px',
                                            border: '1px solid var(--card-border)',
                                            marginBottom: '2rem',
                                        }}
                                    >
                                        <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.25rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                                            Project Details
                                        </h4>
                                        <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                                            {project.details}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="btn-primary"
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        Close
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </section>
    );
}
