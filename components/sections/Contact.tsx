'use client';

import { useState } from 'react';
import { serviceCategories } from '@/lib/data/services';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        category: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showSuccess, setShowSuccess] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 5000);
            setFormData({ name: '', company: '', phone: '', email: '', category: '', message: '' });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const inputStyle = (hasError: boolean) => ({
        width: '100%',
        padding: '0.9rem 1.1rem',
        borderRadius: '12px',
        border: hasError ? '2px solid #EF4444' : '2px solid #e2e8f0',
        background: '#f8fafc',
        color: '#1e293b',
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    });

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-bebas)',
        fontSize: '1rem',
        letterSpacing: '0.05em',
        color: 'var(--primary)',
    };

    const contactMethods = [
        {
            icon: '📞',
            title: 'Call Us',
            detail: '+966 050 544 7209',
            sub: 'Mon–Sat, 8AM–8PM (AST)',
            href: 'tel:+966505447209',
            gradient: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
        },
        {
            icon: '📱',
            title: 'WhatsApp',
            detail: 'Chat with our team',
            sub: 'Instant response',
            href: 'https://wa.me/966505447209',
            gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
        },
        {
            icon: '✉️',
            title: 'Email Us',
            detail: 'info@tsv.com.sa',
            sub: 'Reply within 24 hours',
            href: 'mailto:info@tsv.com.sa',
            gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
        },
        {
            icon: '📍',
            title: 'Visit Us',
            detail: 'Riyadh, Saudi Arabia',
            sub: 'Schedule an appointment',
            href: '#contact',
            gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
        },
    ];

    return (
        <section id="contact" className="section" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)' }}>
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
                        LET&apos;S CONNECT
                    </div>

                    <h2
                        className="section-heading fade-in-up"
                        style={{
                            marginBottom: '1.5rem',
                            color: 'var(--primary)',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        }}
                    >
                        Get In <span style={{ background: 'linear-gradient(135deg, #F2C94C, #D4A42C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
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
                        Ready to start your project? Contact us today for a personalized consultation and detailed quote.
                    </p>
                </div>

                {/* Contact Methods Row */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '1.25rem',
                        marginBottom: '3rem',
                    }}
                    className="contact-methods-grid"
                >
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="contact-method-card"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                background: 'white',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                border: '2px solid #f0f0f0',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '0.75rem',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                            }}
                        >
                            <div style={{
                                width: '55px',
                                height: '55px',
                                borderRadius: '14px',
                                background: method.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
                            }}>
                                {method.icon}
                            </div>
                            <div>
                                <div style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1.15rem',
                                    color: 'var(--primary)',
                                    letterSpacing: '0.04em',
                                    marginBottom: '0.25rem',
                                }}>
                                    {method.title}
                                </div>
                                <div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: '500' }}>
                                    {method.detail}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.15rem' }}>
                                    {method.sub}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Main Content: Form + Info */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 60px rgba(0, 51, 102, 0.1)',
                    }}
                    className="contact-main-grid"
                >
                    {/* Form Side */}
                    <div style={{ background: 'white', padding: '3rem' }}>
                        <h3 style={{
                            fontFamily: 'var(--font-bebas)',
                            fontSize: '1.75rem',
                            marginBottom: '0.5rem',
                            color: 'var(--primary)',
                            letterSpacing: '0.05em',
                        }}>
                            REQUEST A QUOTE
                        </h3>
                        <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>
                            Fill out the form and we&apos;ll get back to you within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {/* Name & Company Row */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                                <div>
                                    <label htmlFor="name" style={labelStyle}>Name *</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" style={inputStyle(!!errors.name)} className="contact-input" />
                                    {errors.name && <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                                </div>
                                <div>
                                    <label htmlFor="company" style={labelStyle}>Company</label>
                                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" style={inputStyle(false)} className="contact-input" />
                                </div>
                            </div>

                            {/* Phone & Email Row */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                                <div>
                                    <label htmlFor="phone" style={labelStyle}>Phone *</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+966 05X XXX XXXX" style={inputStyle(!!errors.phone)} className="contact-input" />
                                    {errors.phone && <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{errors.phone}</span>}
                                </div>
                                <div>
                                    <label htmlFor="email" style={labelStyle}>Email *</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" style={inputStyle(!!errors.email)} className="contact-input" />
                                    {errors.email && <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                                </div>
                            </div>

                            {/* Category */}
                            <div>
                                <label htmlFor="category" style={labelStyle}>Service Category</label>
                                <select id="category" name="category" value={formData.category} onChange={handleChange} style={{ ...inputStyle(false), cursor: 'pointer' }} className="contact-input">
                                    <option value="">Select a category</option>
                                    {serviceCategories.slice(1).map((cat) => (
                                        <option key={cat.id} value={cat.id}>{cat.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" style={labelStyle}>Message *</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your project requirements..." style={{ ...inputStyle(!!errors.message), resize: 'vertical' }} className="contact-input" />
                                {errors.message && <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
                            </div>

                            <button
                                type="submit"
                                className="btn-primary contact-submit"
                                style={{
                                    width: '100%',
                                    fontSize: '1.05rem',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    marginTop: '0.5rem',
                                }}
                            >
                                🚀 SUBMIT REQUEST
                            </button>
                        </form>

                        {showSuccess && (
                            <div style={{
                                marginTop: '1.5rem',
                                padding: '1rem 1.5rem',
                                background: 'linear-gradient(135deg, #10B981, #059669)',
                                color: 'white',
                                borderRadius: '12px',
                                textAlign: 'center',
                                fontWeight: '600',
                                animation: 'fadeInUp 0.3s ease-out',
                            }}>
                                ✓ Thank you! We&apos;ll get back to you within 24 hours.
                            </div>
                        )}
                    </div>

                    {/* Info Side - Navy Background */}
                    <div style={{
                        background: 'linear-gradient(135deg, #003366 0%, #004080 50%, #002244 100%)',
                        padding: '3rem',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                        <div>
                            <h3 style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.75rem',
                                marginBottom: '1.5rem',
                                letterSpacing: '0.05em',
                                color: '#F2C94C',
                            }}>
                                WHAT HAPPENS NEXT?
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {[
                                    { step: '01', title: 'Review', desc: 'We review your request within business hours' },
                                    { step: '02', title: 'Consultation', desc: 'Schedule a call or site visit if needed' },
                                    { step: '03', title: 'Proposal', desc: 'Detailed proposal within 24–48 hours' },
                                    { step: '04', title: 'Kickoff', desc: 'Mobilize our team to start your project' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            background: 'rgba(242, 201, 76, 0.15)',
                                            border: '1px solid rgba(242, 201, 76, 0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: 'var(--font-bebas)',
                                            fontSize: '1rem',
                                            color: '#F2C94C',
                                            minWidth: '44px',
                                        }}>
                                            {item.step}
                                        </div>
                                        <div>
                                            <div style={{
                                                fontFamily: 'var(--font-bebas)',
                                                fontSize: '1.1rem',
                                                letterSpacing: '0.04em',
                                                marginBottom: '0.2rem',
                                            }}>
                                                {item.title}
                                            </div>
                                            <div style={{
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                fontSize: '0.9rem',
                                                lineHeight: '1.5',
                                            }}>
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{
                            marginTop: '2.5rem',
                            padding: '1.5rem',
                            background: 'rgba(255, 255, 255, 0.08)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏢</div>
                            <div style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.2rem',
                                letterSpacing: '0.04em',
                                marginBottom: '0.25rem',
                            }}>
                                TRUE STAR VENTURES
                            </div>
                            <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                                Riyadh, Kingdom of Saudi Arabia
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-input:focus {
                    border-color: var(--primary) !important;
                    box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1) !important;
                }

                .contact-method-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0, 51, 102, 0.1);
                    border-color: var(--primary);
                }

                .contact-submit:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(0, 51, 102, 0.2);
                }

                @media (max-width: 900px) {
                    .contact-main-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .contact-methods-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }

                @media (max-width: 600px) {
                    .contact-methods-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .form-row {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
