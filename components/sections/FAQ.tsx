'use client';

import { useState } from 'react';
import { faqs } from '@/lib/data/faqs';

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-heading">Frequently Asked Questions</h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
                    Quick answers to common questions about our services and approach.
                </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                {faqs.map((faq, index) => (
                    <div
                        key={faq.id}
                        className="card fade-in-up"
                        style={{
                            marginBottom: '1rem',
                            cursor: 'pointer',
                            opacity: 0,
                            animationDelay: `${index * 0.1}s`,
                        }}
                        onClick={() => toggleFAQ(faq.id)}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: openId === faq.id ? '1rem' : '0',
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1.5rem',
                                    letterSpacing: '0.05em',
                                    margin: 0,
                                }}
                            >
                                {faq.question}
                            </h3>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--accent)"
                                strokeWidth="2"
                                style={{
                                    transition: 'transform 0.3s ease',
                                    transform: openId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                                    minWidth: '24px',
                                }}
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>

                        {openId === faq.id && (
                            <div
                                style={{
                                    paddingTop: '1rem',
                                    borderTop: '1px solid var(--card-border)',
                                    animation: 'fadeInUp 0.3s ease-out',
                                }}
                            >
                                <p style={{ color: 'var(--muted)', lineHeight: '1.7', margin: 0 }}>
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
