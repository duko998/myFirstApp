'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
            router.push('/login');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Create Account</h1>
                <p className="subtitle">새로운 계정을 만들고 시작해보세요.</p>

                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="name">이름</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="이름"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

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

                    <div className="form-group">
                        <label htmlFor="confirm-password">비밀번호 확인</label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="••••••••"
                            required
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        />
                    </div>

                    {error && <p style={{ color: 'var(--primary)', fontSize: '0.8rem', marginBottom: '1rem' }}>{error}</p>}

                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? '처리 중...' : '회원가입'}
                    </button>
                </form>

                <p className="footer-text">
                    이미 계정이 있으신가요? <Link href="/login" style={{ cursor: 'pointer', color: 'var(--primary-hover)', fontWeight: 600, textDecoration: 'underline' }}>로그인</Link>
                </p>
            </div>
        </div>
    );
}
