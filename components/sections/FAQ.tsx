'use client';

import { useState } from 'react';
import { faqs } from '@/lib/data/faqs';

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="section" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
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
                        GOT QUESTIONS?
                    </div>

                    <h2
                        className="section-heading fade-in-up"
                        style={{
                            marginBottom: '1.5rem',
                            color: 'var(--primary)',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        }}
                    >
                        Frequently Asked <span style={{ background: 'linear-gradient(135deg, #F2C94C, #D4A42C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span>
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
                        Quick answers to common questions about our services, processes, and approach.
                    </p>
                </div>

                {/* FAQ Grid: Left FAQ Accordion + Right CTA */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }} className="faq-grid">
                    {/* Accordion */}
                    <div>
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className="faq-item"
                                style={{
                                    marginBottom: '1rem',
                                    cursor: 'pointer',
                                    background: openId === faq.id ? 'white' : 'white',
                                    borderRadius: '14px',
                                    border: openId === faq.id ? '2px solid var(--primary)' : '2px solid #eef2f6',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    boxShadow: openId === faq.id
                                        ? '0 8px 24px rgba(0, 51, 102, 0.1)'
                                        : '0 2px 8px rgba(0, 0, 0, 0.03)',
                                }}
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '1.25rem 1.5rem',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px',
                                            background: openId === faq.id
                                                ? 'linear-gradient(135deg, #003366, #004080)'
                                                : '#f1f5f9',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.85rem',
                                            fontWeight: '700',
                                            color: openId === faq.id ? '#F2C94C' : 'var(--primary)',
                                            fontFamily: 'var(--font-bebas)',
                                            transition: 'all 0.3s ease',
                                            minWidth: '36px',
                                        }}>
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3
                                            style={{
                                                fontFamily: 'var(--font-bebas)',
                                                fontSize: '1.2rem',
                                                letterSpacing: '0.04em',
                                                margin: 0,
                                                color: openId === faq.id ? 'var(--primary)' : '#334155',
                                                transition: 'color 0.3s ease',
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            background: openId === faq.id
                                                ? 'linear-gradient(135deg, #003366, #004080)'
                                                : '#f1f5f9',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.3s ease',
                                            minWidth: '32px',
                                        }}
                                    >
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke={openId === faq.id ? '#F2C94C' : 'var(--primary)'}
                                            strokeWidth="3"
                                            style={{
                                                transition: 'transform 0.3s ease',
                                                transform: openId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                            }}
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        maxHeight: openId === faq.id ? '300px' : '0',
                                        overflow: 'hidden',
                                        transition: 'max-height 0.4s ease',
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: '0 1.5rem 1.5rem',
                                            borderTop: '1px solid #eef2f6',
                                            paddingTop: '1.25rem',
                                        }}
                                    >
                                        <p style={{
                                            color: 'var(--muted)',
                                            lineHeight: '1.75',
                                            margin: 0,
                                            fontSize: '0.95rem',
                                        }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right CTA Panel */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, #003366 0%, #004080 50%, #003366 100%)',
                            borderRadius: '20px',
                            padding: '2.5rem 2rem',
                            color: 'white',
                            position: 'sticky',
                            top: '120px',
                            boxShadow: '0 20px 40px rgba(0, 51, 102, 0.2)',
                        }}
                    >
                        <div style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                            textAlign: 'center',
                        }}>
                            💬
                        </div>
                        <h3 style={{
                            fontFamily: 'var(--font-bebas)',
                            fontSize: '1.75rem',
                            marginBottom: '1rem',
                            letterSpacing: '0.05em',
                            textAlign: 'center',
                        }}>
                            STILL HAVE QUESTIONS?
                        </h3>
                        <p style={{
                            color: 'rgba(255,255,255,0.75)',
                            lineHeight: '1.65',
                            marginBottom: '2rem',
                            textAlign: 'center',
                            fontSize: '0.95rem',
                        }}>
                            Our team is ready to help. Reach out anytime and we&apos;ll get back to you within hours.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a
                                href="https://wa.me/966505447209"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.9rem 1.5rem',
                                    background: '#25D366',
                                    color: 'white',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                }}
                                className="faq-cta-btn"
                            >
                                📱 WhatsApp Us
                            </a>
                            <a
                                href="tel:+966505447209"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.9rem 1.5rem',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                    transition: 'all 0.2s ease',
                                }}
                                className="faq-cta-btn"
                            >
                                📞 Call Us Now
                            </a>
                            <a
                                href="mailto:info@tsv.com.sa"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.9rem 1.5rem',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                    transition: 'all 0.2s ease',
                                }}
                                className="faq-cta-btn"
                            >
                                ✉️ Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .faq-item:hover {
                    box-shadow: 0 4px 16px rgba(0, 51, 102, 0.08);
                }

                .faq-cta-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                }

                @media (max-width: 900px) {
                    .faq-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
