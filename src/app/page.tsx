import Link from 'next/link';

export default function Home() {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem'
        }}>
            <div className="glass-card" style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                <h1 className="hero-text">Next.js + Prisma</h1>
                <p style={{ fontSize: '1.2rem', color: '#a5a5a5', marginBottom: '2rem' }}>
                    Welcome to your new, modern project architecture.
                    The legacy code has been safely moved to the <code>/Legacy</code> folder.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link href="/login" className="btn-primary">
                        Sign In
                    </Link>
                    <Link href="/signup" style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        border: '1px solid var(--glass-border)',
                        fontWeight: '600'
                    }}>
                        Create Account
                    </Link>
                </div>
            </div>

            <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', width: '100%', maxWidth: '1000px' }}>
                <div className="glass-card">
                    <h3>PostgreSQL</h3>
                    <p style={{ color: '#a5a5a5', marginTop: '0.5rem' }}>Powerfully managed via Prisma ORM for robust data handling.</p>
                </div>
                <div className="glass-card">
                    <h3>App Router</h3>
                    <p style={{ color: '#a5a5a5', marginTop: '0.5rem' }}>Utilizing the latest Next.js features for optimal performance.</p>
                </div>
                <div className="glass-card">
                    <h3>TypeScript</h3>
                    <p style={{ color: '#a5a5a5', marginTop: '0.5rem' }}>Full type safety across your entire application stack.</p>
                </div>
            </div>
        </main>
    );
}
