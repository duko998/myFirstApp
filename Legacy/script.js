/**
 * 페이지 이동을 담당하는 함수
 */
function navigateTo(url) {
    window.location.href = url;
}

/**
 * 회원가입 데이터를 LocalStorage에 저장하는 함수 (FormData 사용)
 */
function handleSignup(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        createdAt: new Date().toISOString()
    };

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === data.email)) {
        alert('이미 가입된 이메일입니다.');
        return;
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
    navigateTo('login.html');
}

/**
 * 로그인 처리 함수
 */
function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === data.email && u.password === data.password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert(`${user.name}님, 환영합니다!`);
        navigateTo('index.html');
    } else {
        alert('이메일 또는 비밀번호가 일치하지 않습니다.');
    }
}

/**
 * 로그아웃 처리 함수
 */
function handleLogout() {
    localStorage.removeItem('currentUser');
    window.location.reload();
}

/**
 * 페이지 로드 시 상태 확인
 */
document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const loginSection = document.getElementById('loginSection');
    const mainSection = document.getElementById('mainSection');

    // index.html 전용 처리
    if (loginSection && mainSection) {
        if (currentUser) {
            loginSection.classList.add('hidden');
            mainSection.classList.remove('hidden');
            document.body.classList.add('main-view');
            document.getElementById('userName').textContent = currentUser.name;
        } else {
            loginSection.classList.remove('hidden');
            mainSection.classList.add('hidden');
            document.body.classList.remove('main-view');
        }
    }

    // 네비게이션 바 투명도 조절
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
});
