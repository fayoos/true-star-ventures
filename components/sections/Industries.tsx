import { industries } from '@/lib/data/industries';

export default function Industries() {
    return (
        <section id="industries" className="section">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="section-heading">Industries We Serve</h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
                    Trusted by diverse sectors for comprehensive project delivery and ongoing support.
                </p>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                }}
            >
                {industries.map((industry, index) => (
                    <div
                        key={industry.id}
                        className="card fade-in-up"
                        style={{
                            textAlign: 'center',
                            opacity: 0,
                            animationDelay: `${index * 0.1}s`,
                        }}
                    >
                        <div
                            style={{
                                fontSize: '3.5rem',
                                marginBottom: '1rem',
                            }}
                        >
                            {industry.icon === 'building-tower' && '🏢'}
                            {industry.icon === 'health' && '🏥'}
                            {industry.icon === 'office' && '💼'}
                            {industry.icon === 'warehouse' && '🏭'}
                            {industry.icon === 'retail' && '🛍️'}
                            {industry.icon === 'landmark' && '🏛️'}
                        </div>
                        <h3
                            style={{
                                fontFamily: 'var(--font-bebas)',
                                fontSize: '1.5rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {industry.name}
                        </h3>
                        <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
                            {industry.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
