import Link from 'next/link';

export default function LoginPage() {
    return (
        <main className="auth-body" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="card">
                    <h1>Welcome Back</h1>
                    <p className="subtitle">계정에 로그인하여 서비스를 이용하세요.</p>

                    <form>
                        <div className="form-group">
                            <label htmlFor="email">이메일 주소</label>
                            <input type="email" id="email" name="email" placeholder="email@example.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id="password" name="password" placeholder="••••••••" required />
                        </div>

                        <button type="submit" className="btn">로그인</button>
                    </form>

                    <p className="footer-text">
                        계정이 없으신가요?
                        <Link href="/signup" style={{
                            cursor: 'pointer',
                            color: 'var(--primary-light)',
                            fontWeight: '600',
                            textDecoration: 'underline',
                            marginLeft: '0.5rem'
                        }}>
                            회원가입
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
