'use client';

import { serviceCategories } from '@/lib/data/services';

export default function Services() {
    return (
        <section id="services" className="section" style={{ background: '#F8FAFC' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
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
                        COMPREHENSIVE <span className="text-gradient">SOLUTIONS</span>
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

                {/* Category Grid - Clean & Vibrant */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2.5rem',
                        padding: '0 1rem',
                    }}
                >
                    {serviceCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className="card fade-in-up"
                            style={{
                                padding: '3rem 2.5rem',
                                animationDelay: `${index * 0.1}s`,
                                display: 'flex',
                                flexDirection: 'column',
                                border: '1px solid rgba(0,0,0,0.05)',
                                background: 'white',
                                borderRadius: '16px', // Modern rounded corners
                            }}
                        >
                            {/* Category Icon Area */}
                            <div
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    background: `linear-gradient(135deg, rgba(235, 248, 255, 1), rgba(255, 255, 255, 1))`,
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2rem',
                                    fontSize: '2.5rem',
                                    color: 'var(--primary)',
                                    boxShadow: '0 10px 30px rgba(0, 51, 102, 0.05)',
                                    border: '1px solid rgba(0, 51, 102, 0.05)',
                                }}
                            >
                                {category.id === 'construction' && '🏗️'}
                                {category.id === 'engineering' && '⚙️'}
                                {category.id === 'it-digital' && '💻'}
                                {category.id === 'facility' && '🏢'}
                            </div>

                            <h3
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1.75rem',
                                    marginBottom: '1rem',
                                    color: 'var(--primary)',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {category.label}
                            </h3>

                            <p
                                style={{
                                    color: 'var(--muted)',
                                    marginBottom: '2rem',
                                    lineHeight: '1.7',
                                    fontSize: '1rem',
                                    flex: 1,
                                }}
                            >
                                {category.id === 'construction' && 'Turnkey construction projects, interior fit-outs, and modular building solutions delivered with precision.'}
                                {category.id === 'engineering' && 'Advanced MEP services, HVAC systems, and civil engineering excellence for complex infrastructures.'}
                                {category.id === 'it-digital' && 'Cutting-edge IT infrastructure, digital transformation, security systems, and software solutions.'}
                                {category.id === 'facility' && 'Comprehensive maintenance, cleaning, and facility management services to keep your operations running smoothly.'}
                            </p>

                            <a
                                href={`/services?category=${category.id}`} // Simulated link
                                style={{
                                    color: 'var(--accent-secondary)', // Teal
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.95rem',
                                    marginTop: 'auto',
                                    fontFamily: 'var(--font-body)',
                                }}
                            >
                                Explore Category <span style={{ transition: 'transform 0.3s' }}>→</span>
                            </a>
                        </div>
                    ))}
                </div>

                <div
                    className="fade-in-up"
                    style={{
                        textAlign: 'center',
                        marginTop: '5rem',
                        animationDelay: '0.5s'
                    }}
                >
                    <a href="/services" className="btn-primary">
                        VIEW FULL SERVICE CATALOG
                    </a>
                </div>
            </div>
        </section>
    );
}
