export default function Process() {
    const steps = [
        {
            number: '01',
            title: 'Discover',
            description: 'We listen to your needs, conduct site visits, and understand your objectives thoroughly.',
        },
        {
            number: '02',
            title: 'Plan & Quote',
            description: 'Detailed proposals with transparent pricing, timelines, and deliverables within 24-48 hours.',
        },
        {
            number: '03',
            title: 'Execute',
            description: 'Skilled teams mobilize quickly, following proven methodologies with regular progress updates.',
        },
        {
            number: '04',
            title: 'Quality Check',
            description: 'Rigorous inspections and testing ensure every aspect meets our high standards and your requirements.',
        },
        {
            number: '05',
            title: 'Handover & Support',
            description: 'Complete documentation, training, and ongoing AMC/support services for long-term success.',
        },
    ];

    return (
        <section id="process" className="section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-heading">Our Process</h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
                    A proven methodology delivering projects on time, on budget, and to specification.
                </p>
            </div>

            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto',
                }}
            >
                {steps.map((step, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            alignItems: 'flex-start',
                        }}
                        className="fade-in-up"
                    >
                        {/* Number Badge */}
                        <div
                            style={{
                                minWidth: '80px',
                                height: '80px',
                                background: 'linear-gradient(135deg, var(--copper), var(--copper-light))',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '2rem',
                                color: 'var(--off-white)',
                                letterSpacing: '0.05em',
                                boxShadow: '0 8px 16px rgba(184, 115, 51, 0.3)',
                            }}
                        >
                            {step.number}
                        </div>

                        {/* Content */}
                        <div className="card" style={{ flex: 1 }}>
                            <h3
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                    fontSize: '1.75rem',
                                    marginBottom: '0.75rem',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {step.title}
                            </h3>
                            <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Connecting Line */}
                <div
                    style={{
                        position: 'absolute',
                        left: '40px',
                        top: '80px',
                        bottom: '80px',
                        width: '2px',
                        background: 'linear-gradient(180deg, var(--copper), var(--copper-light))',
                        opacity: 0.3,
                        zIndex: -1,
                    }}
                />
            </div>
        </section>
    );
}
