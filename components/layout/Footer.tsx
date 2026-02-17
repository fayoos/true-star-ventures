'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{
                background: 'var(--card-bg)',
                borderTop: '2px solid var(--primary)',
                marginTop: '4rem',
            }}
        >
            <div
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '3rem 2rem 2rem',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '3rem',
                        marginBottom: '2rem',
                    }}
                >
                    {/* Company Info */}
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1rem',
                            }}
                        >
                            <img
                                src="/logo.png?v=4"
                                alt="TSV"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    objectFit: 'contain',
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1.25rem',
                                    letterSpacing: '0.1em',
                                }}
                            >
                                TRUE STAR VENTURES
                            </span>
                        </div>
                        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Multifaceted provider of construction, engineering, modular solutions, maintenance, and IT/digital services.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.25rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Quick Links
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {['About', 'Services', 'Industries', 'Why Us', 'Process', 'Portfolio', 'FAQ', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    style={{
                                        color: 'var(--muted)',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.25rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Get In Touch
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a
                                href="https://wa.me/966505447209"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--muted)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                }}
                            >
                                <span>📱</span> WhatsApp: +966 050 544 7209
                            </a>
                            <a
                                href="tel:+966505447209"
                                style={{
                                    color: 'var(--muted)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                }}
                            >
                                <span>📞</span> Phone: +966 050 544 7209
                            </a>
                            <p
                                style={{
                                    color: 'var(--muted)',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    margin: 0,
                                }}
                            >
                                <span>✉️</span> info@tsv.com.sa
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.25rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Follow Us
                        </h3>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {['linkedin', 'twitter', 'instagram'].map((platform) => (
                                <a
                                    key={platform}
                                    href={`https://${platform}.com`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--card-bg)',
                                        border: '1px solid var(--card-border)',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--muted)',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent)';
                                        e.currentTarget.style.color = 'var(--accent)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--card-border)';
                                        e.currentTarget.style.color = 'var(--muted)';
                                    }}
                                >
                                    {platform === 'linkedin' && 'in'}
                                    {platform === 'twitter' && 'X'}
                                    {platform === 'instagram' && 'IG'}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    style={{
                        borderTop: '1px solid var(--card-border)',
                        paddingTop: '2rem',
                        textAlign: 'center',
                        color: 'var(--muted)',
                        fontSize: '0.875rem',
                    }}
                >
                    <p style={{ margin: 0 }}>
                        © {currentYear} TRUE STAR VENTURES. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
