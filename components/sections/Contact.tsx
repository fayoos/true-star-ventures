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

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 5000);
            setFormData({
                name: '',
                company: '',
                phone: '',
                email: '',
                category: '',
                message: '',
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Clear error for this field when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: '',
            });
        }
    };

    return (
        <section id="contact" className="section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-heading">Get In Touch</h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
                    Ready to start your project? Contact us for a consultation and quote.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                {/* Contact Form */}
                <div className="card">
                    <h3
                        style={{
                            fontFamily: 'var(--font-bebas)',
                            fontSize: '1.75rem',
                            marginBottom: '1.5rem',
                            letterSpacing: '0.05em',
                        }}
                    >
                        Request a Quote
                    </h3>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div>
                            <label
                                htmlFor="name"
                                style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1rem',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    borderRadius: '4px',
                                    border: `1px solid ${errors.name ? '#ff4444' : 'var(--card-border)'}`,
                                    background: 'var(--card-bg)',
                                    color: 'var(--foreground)',
                                    fontFamily: 'var(--font-crimson)',
                                    fontSize: '1rem',
                                }}
                            />
                            {errors.name && (
                                <span style={{ color: '#ff4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="company"
                                style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1rem',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    borderRadius: '4px',
                                    border: '1px solid var(--card-border)',
                                    background: 'var(--card-bg)',
                                    color: 'var(--foreground)',
                                    fontFamily: 'var(--font-crimson)',
                                    fontSize: '1rem',
                                }}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1rem',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Phone *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    borderRadius: '4px',
                                    border: `1px solid ${errors.phone ? '#ff4444' : 'var(--card-border)'}`,
                                    background: 'var(--card-bg)',
                                    color: 'var(--foreground)',
                                    fontFamily: 'var(--font-crimson)',
                                    fontSize: '1rem',
                                }}
                            />
                            {errors.phone && (
                                <span style={{ color: '#ff4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                                    {errors.phone}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1rem',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    borderRadius: '4px',
                                    border: `1px solid ${errors.email ? '#ff4444' : 'var(--card-border)'}`,
                                    background: 'var(--card-bg)',
                                    color: 'var(--foreground)',
                                    fontFamily: 'var(--font-crimson)',
                                    fontSize: '1rem',
                                }}
                            />
                            {errors.email && (
                                <span style={{ color: '#ff4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="category"
                                style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1rem',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Service Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    borderRadius: '4px',
                                    border: '1px solid var(--card-border)',
                                    background: 'var(--card-bg)',
                                    color: 'var(--foreground)',
                                    fontFamily: 'var(--font-crimson)',
                                    fontSize: '1rem',
                                }}
                            >
                                <option value="">Select a category</option>
                                {serviceCategories.slice(1).map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                style={{
                                    display: 'block',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1rem',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                style={{
                                    width: '100%',
                                    padding: '0.875rem',
                                    borderRadius: '4px',
                                    border: `1px solid ${errors.message ? '#ff4444' : 'var(--card-border)'}`,
                                    background: 'var(--card-bg)',
                                    color: 'var(--foreground)',
                                    fontFamily: 'var(--font-crimson)',
                                    fontSize: '1rem',
                                    resize: 'vertical',
                                }}
                            />
                            {errors.message && (
                                <span style={{ color: '#ff4444', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.125rem' }}>
                            Submit Request
                        </button>
                    </form>

                    {showSuccess && (
                        <div
                            style={{
                                marginTop: '1.5rem',
                                padding: '1rem',
                                background: '#4CAF50',
                                color: 'white',
                                borderRadius: '4px',
                                textAlign: 'center',
                                animation: 'fadeInUp 0.3s ease-out',
                            }}
                        >
                            ✓ Thank you! We&apos;ll get back to you within 24-48 hours.
                        </div>
                    )}
                </div>

                {/* CTA Panel */}
                <div>
                    <div className="card" style={{ marginBottom: '1.5rem' }}>
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.75rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Quick Response
                        </h3>
                        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                            Need immediate assistance? Reach out directly via WhatsApp or phone for rapid support.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a
                                href="https://wa.me/0000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    fontSize: '1.125rem',
                                }}
                            >
                                📱 WhatsApp Us
                            </a>
                            <a
                                href="tel:+0000000000"
                                className="btn-secondary"
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    fontSize: '1.125rem',
                                }}
                            >
                                📞 Call Now
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.75rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            What Happens Next?
                        </h3>
                        <ul style={{ color: 'var(--muted)', lineHeight: '2', paddingLeft: '1.5rem' }}>
                            <li>We review your request within business hours</li>
                            <li>Schedule a consultation or site visit if needed</li>
                            <li>Provide detailed proposal within 24-48 hours</li>
                            <li>Discuss timeline, pricing, and deliverables</li>
                            <li>Mobilize our team to start your project</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
