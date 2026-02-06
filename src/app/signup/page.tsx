import Link from 'next/link';

export default function SignupPage() {
    return (
        <main className="auth-body" style={{ minHeight: '100vh' }}>
            <div className="container">
                <div className="card">
                    <h1>Create Account</h1>
                    <p className="subtitle">새로운 계정을 만들고 시작해보세요.</p>

                    <form>
                        <div className="form-group">
                            <label htmlFor="name">이름</label>
                            <input type="text" id="name" name="name" placeholder="홍길동" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">이메일 주소</label>
                            <input type="email" id="email" name="email" placeholder="email@example.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" id="password" name="password" placeholder="••••••••" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm-password">비밀번호 확인</label>
                            <input type="password" id="confirm-password" name="confirmPassword" placeholder="••••••••" required />
                        </div>

                        <button type="submit" className="btn">회원가입</button>
                    </form>

                    <p className="footer-text">
                        이미 계정이 있으신가요?
                        <Link href="/login" style={{
                            cursor: 'pointer',
                            color: 'var(--primary-light)',
                            fontWeight: '600',
                            textDecoration: 'underline',
                            marginLeft: '0.5rem'
                        }}>
                            로그인
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
