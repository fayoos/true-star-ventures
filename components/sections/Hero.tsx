'use client';

export default function Hero() {
    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            style={{
                position: 'relative',
                height: '100vh',
                minHeight: '700px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--background) 0%, #F0F7FF 100%)', // Slight blue tint
            }}
        >
            {/* Dynamic Background Shapes - Vibrant & Modern */}
            <div
                style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-20%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(0, 51, 102, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: 0,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-10%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, rgba(242, 201, 76, 0.1) 0%, transparent 60%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    zIndex: 0,
                }}
            />

            <div className="section" style={{ width: '100%', zIndex: 1, padding: '0 2rem' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) minmax(300px, 0.8fr)', gap: '4rem', alignItems: 'center' }}>

                    {/* Text Content */}
                    <div style={{ maxWidth: '800px', zIndex: 2 }}>
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
                                border: '1px solid rgba(0, 51, 102, 0.1)',
                                backdropFilter: 'blur(5px)',
                            }}
                        >
                            ★ ENGINEERING EXCELLENCE SINCE 2010
                        </div>

                        <h1
                            className="fade-in-up"
                            style={{
                                fontSize: 'clamp(3.5rem, 5vw, 5.5rem)',
                                lineHeight: '1.1',
                                marginBottom: '1.5rem',
                                color: 'var(--primary)',
                                fontFamily: 'var(--font-bebas)',
                                letterSpacing: '0.02em',
                                animationDelay: '0.1s',
                            }}
                        >
                            BUILDING THE <br />
                            <span style={{
                                position: 'relative',
                                display: 'inline-block',
                                color: 'var(--primary)',
                                zIndex: 1
                            }}>
                                FUTURE
                                <svg
                                    style={{
                                        position: 'absolute',
                                        bottom: '8px',
                                        left: '-5%',
                                        width: '110%',
                                        height: '25px',
                                        zIndex: -1,
                                        opacity: 0.8
                                    }}
                                    viewBox="0 0 200 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 15 Q 100 0 200 15" stroke="var(--accent)" strokeWidth="8" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                            {' '}TODAY
                        </h1>

                        <p
                            className="fade-in-up"
                            style={{
                                fontSize: '1.15rem',
                                lineHeight: '1.6',
                                color: 'var(--muted)',
                                marginBottom: '2.5rem',
                                maxWidth: '550px',
                                animationDelay: '0.2s',
                                fontWeight: '400',
                            }}
                        >
                            Your trusted partner for <strong>Turnkey Construction</strong>, <strong>Engineering Solutions</strong>, and <strong>Digital Transformation</strong>. We deliver precision, quality, and innovation.
                        </p>

                        <div
                            className="fade-in-up"
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'center',
                                animationDelay: '0.3s',
                            }}
                        >
                            <button onClick={scrollToServices} className="btn-primary">
                                EXPLORE SERVICES
                            </button>
                            <a href="#contact" className="btn-secondary">
                                CONTACT US
                            </a>
                        </div>
                    </div>

                    {/* Hero Visual - Abstract CSS Composition */}
                    <div
                        className="hero-visual fade-in-up"
                        style={{
                            position: 'relative',
                            height: '500px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            animationDelay: '0.4s',
                            perspective: '1000px'
                        }}
                    >
                        {/* Main Organic Shape */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                            boxShadow: '0 30px 60px rgba(0,51,102,0.25)',
                            overflow: 'hidden',
                            animation: 'morph 12s ease-in-out infinite alternate',
                        }}>
                            {/* Map/Grid Overlay Pattern */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                opacity: 0.15,
                                backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                                transform: 'rotate(-15deg) scale(1.5)',
                            }} />
                        </div>

                        {/* Floating Glass Cards */}
                        <div className="glass-panel" style={{
                            position: 'absolute',
                            top: '15%',
                            left: '-10%',
                            padding: '1.25rem',
                            borderRadius: '16px',
                            width: '200px',
                            zIndex: 2,
                            animation: 'float 6s ease-in-out infinite',
                            background: 'rgba(255, 255, 255, 0.9)',
                        }}>
                            <div style={{ color: 'var(--accent)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>🏗️</div>
                            <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.2rem', color: 'var(--primary)', lineHeight: 1 }}>CONSTRUCTION</h3>
                            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Premium build quality</p>
                        </div>

                        <div className="glass-panel" style={{
                            position: 'absolute',
                            bottom: '15%',
                            right: '-5%',
                            padding: '1.25rem',
                            borderRadius: '16px',
                            width: '200px',
                            zIndex: 2,
                            animation: 'float 7s ease-in-out infinite reverse',
                            background: 'rgba(255, 255, 255, 0.9)',
                        }}>
                            <div style={{ color: 'var(--accent-secondary)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>💻</div>
                            <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.2rem', color: 'var(--primary)', lineHeight: 1 }}>DIGITAL SOLUTIONS</h3>
                            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>Future-ready IT systems</p>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        opacity: 0.6,
                        animation: 'bounce 2s infinite',
                    }}
                >
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--muted)', fontFamily: 'var(--font-bebas)' }}>SCROLL</span>
                    <div
                        style={{
                            width: '2px',
                            height: '30px',
                            background: 'linear-gradient(to bottom, var(--primary), transparent)',
                            borderRadius: '2px',
                        }}
                    />
                </div>
            </div>

            <style jsx>{`
                @keyframes morph {
                    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: rotate(0deg); }
                    100% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; transform: rotate(5deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
                    40% {transform: translateY(-10px) translateX(-50%);}
                    60% {transform: translateY(-5px) translateX(-50%);}
                }
                @media (max-width: 900px) {
                    .section > div { grid-template-columns: 1fr !important; text-align: center; }
                    .hero-visual { display: none !important; } /* Hide visual on mobile to prevent clutter */
                    h1 { font-size: 3.5rem !important; }
                }
            `}</style>
        </section>
    );
}
