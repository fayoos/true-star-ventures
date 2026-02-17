'use client';

import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { label: 'About', id: 'about' },
        { label: 'Services', id: 'services' },
        { label: 'Industries', id: 'industries' },
        { label: 'Why Us', id: 'why-us' },
        { label: 'Process', id: 'process' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'FAQ', id: 'faq' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                background: 'rgba(255, 255, 255, 0.95)',
                borderBottom: '1px solid var(--card-border)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease',
            }}
        >
            <nav
                style={{
                    maxWidth: '1600px',
                    margin: '0 auto',
                    padding: '1rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '2rem',
                }}
            >
                {/* Logo */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'pointer',
                    }}
                    onClick={() => scrollToSection('hero')}
                    className="logo-container"
                >
                    <img
                        src="/logo.png?v=4"
                        alt="TRUE STAR VENTURES"
                        style={{
                            width: '60px',
                            height: '60px',
                            objectFit: 'contain',
                            transition: 'transform 0.4s ease',
                        }}
                        className="logo-image"
                    />
                    <span
                        style={{
                            fontFamily: 'var(--font-bebas)',
                            fontSize: '1.6rem',
                            letterSpacing: '0.1em',
                            color: 'var(--primary)',
                        }}
                    >
                        TRUE STAR VENTURES
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2rem',
                    }}
                    className="desktop-nav"
                >
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--muted)',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.95rem',
                                    fontWeight: '500',
                                    cursor: 'pointer',
                                    padding: '0.5rem 0',
                                    position: 'relative',
                                    letterSpacing: '0.02em',
                                    transition: 'color 0.3s ease',
                                }}
                                className="nav-link"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <a
                            href="https://wa.me/966505447209"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{
                                fontSize: '0.85rem',
                                padding: '0.6rem 1.25rem',
                            }}
                        >
                            WhatsApp
                        </a>
                        <a
                            href="tel:+966505447209"
                            className="btn-secondary"
                            style={{
                                fontSize: '0.85rem',
                                padding: '0.6rem 1.25rem',
                            }}
                        >
                            Call Us
                        </a>

                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'transparent',
                        border: '2px solid var(--primary)',
                        borderRadius: '8px',
                        padding: '0.5rem',
                        cursor: 'pointer',
                        width: '44px',
                        height: '44px',
                        color: 'var(--primary)',
                    }}
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {mobileMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </>
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div
                    style={{
                        background: 'rgba(255, 255, 255, 0.98)',
                        borderTop: '1px solid var(--card-border)',
                        padding: '2rem',
                        height: '100vh',
                        position: 'absolute',
                        width: '100%',
                        top: '100%',
                        left: 0,
                        backdropFilter: 'blur(20px)',
                    }}
                    className="mobile-menu"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--primary)',
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '2rem',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    textAlign: 'center',
                                    letterSpacing: '0.1em',
                                }}
                            >
                                {link.label}
                            </button>
                        ))}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', width: '100%', maxWidth: '300px' }}>
                            <a href="https://wa.me/966505447209" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: 'center' }}>
                                WhatsApp
                            </a>
                            <a href="tel:+966505447209" className="btn-secondary" style={{ textAlign: 'center' }}>
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @media (max-width: 1024px) {
            .desktop-nav { display: none !important; }
            .mobile-menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }

        .logo-container:hover .logo-image {
            transform: rotate(5deg) scale(1.05);
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
            border-radius: 1px;
        }

        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: var(--primary) !important; }
      `}</style>
        </header>
    );
}
