export default function WhyUs() {
    const reasons = [
        {
            icon: '🎯',
            title: 'Turnkey, Multi-Division Capability',
            description: 'One partner for construction, IT, digital, and facility management—eliminating coordination complexity.',
        },
        {
            icon: '✅',
            title: 'Quality & Safety-First Execution',
            description: 'Rigorous standards, proven methodologies, and zero-compromise safety culture on every project.',
        },
        {
            icon: '💬',
            title: 'Clear Communication & Transparency',
            description: 'Regular updates, detailed reporting, and honest dialogue throughout your project lifecycle.',
        },
        {
            icon: '⚡',
            title: 'Skilled Teams + Scalable Delivery',
            description: 'Experienced professionals backed by flexible resources to meet tight deadlines and changing needs.',
        },
        {
            icon: '🔧',
            title: 'Preventive Maintenance Mindset',
            description: 'Proactive AMCs and monitoring programs minimizing downtime and extending asset life.',
        },
        {
            icon: '🤝',
            title: 'Long-Term Partnership Support',
            description: '24/7 assistance, rapid response teams, and ongoing optimization—we\'re with you beyond handover.',
        },
    ];

    return (
        <section id="why-us" className="section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-heading">Why Choose TRUE STAR VENTURES</h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
                    Proven expertise, integrated capabilities, and unwavering commitment to your success.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}
            >
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="card slide-in"
                        style={{
                            opacity: 0,
                            animationDelay: `${index * 0.1}s`,
                        }}
                    >
                        <div
                            style={{
                                fontSize: '3rem',
                                marginBottom: '1rem',
                            }}
                        >
                            {reason.icon}
                        </div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {reason.title}
                        </h3>
                        <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                            {reason.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
