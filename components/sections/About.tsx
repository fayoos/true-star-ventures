export default function About() {
    return (
        <section id="about" className="section">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-heading">About TRUE STAR VENTURES</h2>
            </div>

            {/* Main About Content */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem',
                }}
            >
                <div className="card">
                    <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.75rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                        Who We Are
                    </h3>
                    <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                        TRUE STAR VENTURES is a multifaceted provider delivering end-to-end solutions across construction, engineering, modular systems, maintenance, IT infrastructure, and digital services. We bring together diverse capabilities under one roof, offering clients seamless project execution from concept to completion.
                    </p>
                </div>

                <div className="card">
                    <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.75rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                        Our Vision
                    </h3>
                    <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                        To redefine excellence in integrated project delivery through innovation, quality craftsmanship, and unwavering commitment to client success. We envision becoming the trusted partner for organizations seeking comprehensive, reliable solutions.
                    </p>
                </div>

                <div className="card">
                    <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.75rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                        Our Mission
                    </h3>
                    <p style={{ color: 'var(--muted)', lineHeight: '1.7' }}>
                        Delivering excellence in craftsmanship, transparent communication, innovative solutions, and unmatched client satisfaction. We combine technical expertise with proven methodologies to exceed expectations on every project.
                    </p>
                </div>
            </div>

            {/* Core Values */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', letterSpacing: '0.05em' }}>
                    Our Core Values
                </h3>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                }}
            >
                {[
                    {
                        icon: '⭐',
                        title: 'Excellence',
                        description: 'Uncompromising quality in every aspect of our work, from materials to execution.',
                    },
                    {
                        icon: '💡',
                        title: 'Innovation',
                        description: 'Embracing modern techniques and technologies to deliver cutting-edge solutions.',
                    },
                    {
                        icon: '🤝',
                        title: 'Integrity',
                        description: 'Transparent practices, honest communication, and ethical business conduct always.',
                    },
                    {
                        icon: '🛡️',
                        title: 'Safety',
                        description: 'Zero-compromise safety culture protecting our people, clients, and communities.',
                    },
                    {
                        icon: '👥',
                        title: 'Collaboration',
                        description: 'Partnering closely with clients, fostering teamwork, and building lasting relationships.',
                    },
                ].map((value, index) => (
                    <div
                        key={index}
                        className="card"
                        style={{
                            textAlign: 'center',
                            padding: '2rem 1.5rem',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '3rem',
                                marginBottom: '1rem',
                            }}
                        >
                            {value.icon}
                        </div>
                        <h4 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.5rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                            {value.title}
                        </h4>
                        <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
