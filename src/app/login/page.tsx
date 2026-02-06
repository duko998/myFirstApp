import Link from 'next/link';

export default function LoginPage() {
    return (
        <main style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '1rem'
        }}>
            <div className="glass-card" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Welcome Back</h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', color: '#a5a5a5' }}>Email Address</label>
                        <input type="email" placeholder="you@example.com" style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '8px',
                            padding: '0.75rem',
                            color: 'white'
                        }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.9rem', color: '#a5a5a5' }}>Password</label>
                        <input type="password" placeholder="••••••••" style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '8px',
                            padding: '0.75rem',
                            color: 'white'
                        }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
                        Sign In
                    </button>
                </form>
                <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.9rem', color: '#a5a5a5' }}>
                    Don't have an account? <Link href="/signup" style={{ color: 'var(--primary)', fontWeight: '600' }}>Sign Up</Link>
                </p>
            </div>
        </main>
    );
}
