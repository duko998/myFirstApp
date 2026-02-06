'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function Home() {
    const [user, setUser] = useState<User | null>(null);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            document.body.classList.add('main-view');
        } else {
            document.body.classList.remove('main-view');
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('main-view');
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
        document.body.classList.remove('main-view');
        router.refresh();
    };

    if (!mounted) return null;

    if (!user) {
        return (
            <div className="container">
                <div className="card" style={{ textAlign: 'center' }}>
                    <h1>Welcome</h1>
                    <p className="subtitle">프리미엄 콘텐츠를 즐기려면 로그인하세요.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                        <button className="btn" onClick={() => router.push('/login')}>로그인</button>
                        <button
                            className="btn"
                            style={{ background: 'var(--glass-bg)', border: '1px solid var(--primary)', color: 'var(--text-main)', boxShadow: 'none' }}
                            onClick={() => router.push('/signup')}
                        >
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="mainSection">
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="logo">MYFLIX</div>
                <div className="nav-links">
                    <span style={{ alignSelf: 'center', color: 'var(--text-dim)', marginRight: '1rem' }}>
                        <b id="userName" style={{ color: 'white' }}>{user.name}</b>님
                    </span>
                    <button className="nav-btn" onClick={handleLogout}>로그아웃</button>
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
                    <MovieCard src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1542204172-658a09b57c4c?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=400&q=80" />
                </div>

                <h2 className="row-title" style={{ marginTop: '2rem' }}>최신 등록 콘텐츠</h2>
                <div className="movie-row">
                    <MovieCard src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1543536448-d247542f576c?auto=format&fit=crop&w=400&q=80" />
                    <MovieCard src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80" />
                </div>
            </section>
        </div>
    );
}

function MovieCard({ src }: { src: string }) {
    return (
        <div className="movie-card">
            <img src={src} alt="movie" />
        </div>
    );
}
