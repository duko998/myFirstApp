'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            // 클라이언트 세션 시뮬레이션
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            alert(`${data.user.name}님, 환영합니다!`);
            router.push('/');
            router.refresh();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Welcome Back</h1>
                <p className="subtitle">계정에 로그인하여 서비스를 이용하세요.</p>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">이메일 주소</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email@example.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            required
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    {error && <p style={{ color: 'var(--primary)', fontSize: '0.8rem', marginBottom: '1rem' }}>{error}</p>}

                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? '로그인 중...' : '로그인'}
                    </button>
                </form>

                <p className="footer-text">
                    계정이 없으신가요? <Link href="/signup" style={{ cursor: 'pointer', color: 'var(--primary-hover)', fontWeight: 600, textDecoration: 'underline' }}>회원가입</Link>
                </p>
            </div>
        </div>
    );
}
