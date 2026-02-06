import Link from 'next/link';

export default function Home() {
    // Note: Standard Next.js server component. 
    // In a real app, logic for "isLoggedIn" would check session/cookies.
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return (
            <main className="auth-body" style={{ minHeight: '100vh' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="card">
                        <h1>Welcome</h1>
                        <p className="subtitle">프리미엄 콘텐츠를 즐기려면 로그인하세요.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                            <Link href="/login" className="btn">
                                로그인
                            </Link>
                            <Link href="/signup" className="btn" style={{
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--primary)',
                                boxShadow: 'none'
                            }}>
                                회원가입
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <nav className="navbar">
                <div className="logo">MYFLIX</div>
                <div className="nav-links">
                    <span style={{ alignSelf: 'center', color: 'var(--text-dim)', marginRight: '1rem' }}>
                        <b style={{ color: 'white' }}>User</b>님
                    </span>
                    <button className="nav-btn">로그아웃</button>
                </div>
            </nav>

            <header className="hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=1920&q=80')" }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 style={{ background: 'none', WebkitTextFillColor: 'white' }}>Stranger Things</h1>
                    <p>인디애나주의 작은 마을 실종된 소년. 그리고 나타난 정체불명의 소녀. 수수께끼 같은 실험과 공포가 마을을 뒤덮는다.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn" style={{ width: 'auto', padding: '0.8rem 2rem', background: 'white', color: 'black', boxShadow: 'none' }}>▶ 재생</button>
                        <button className="btn" style={{ width: 'auto', padding: '0.8rem 2rem', background: 'rgba(100,100,100,0.5)', color: 'white', border: 'none', boxShadow: 'none' }}>ℹ 상세 정보</button>
                    </div>
                </div>
            </header>

            <section className="movie-section">
                <h2 className="row-title">인기 콘텐츠</h2>
                <div className="movie-row">
                    {[
                        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1542204172-658a09b57c4c?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=400&q=80'
                    ].map((url, i) => (
                        <div key={i} className="movie-card"><img src={url} alt="movie" /></div>
                    ))}
                </div>

                <h2 className="row-title" style={{ marginTop: '2rem' }}>최신 등록 콘텐츠</h2>
                <div className="movie-row">
                    {[
                        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1543536448-d247542f576c?auto=format&fit=crop&w=400&q=80',
                        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80'
                    ].map((url, i) => (
                        <div key={i} className="movie-card"><img src={url} alt="movie" /></div>
                    ))}
                </div>
            </section>
        </main>
    );
}
