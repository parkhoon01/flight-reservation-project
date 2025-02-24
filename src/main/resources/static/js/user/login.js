// DOM 요소 가져오기
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const findIdLink = document.getElementById('find-id');
const findPasswordLink = document.getElementById('find-password');
const signupLink = document.getElementById('signup');

const kakaoLoginBtn = document.getElementById('kakao-login');
const naverLoginBtn = document.getElementById('naver-login');
const googleLoginBtn = document.getElementById('google-login');

// 로그인 버튼 클릭 이벤트
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === '' || password === '') {
        alert('아이디와 비밀번호를 입력해주세요.');
    } else {
        alert(`로그인 시도: 아이디=${username}, 비밀번호=${password}`);
    }
});

// 링크 클릭 이벤트
findIdLink.addEventListener('click', (e) => {
    //e.preventDefault();
    alert('아이디 찾기 페이지로 이동합니다.');
});

findPasswordLink.addEventListener('click', (e) => {
    //e.preventDefault();
    alert('비밀번호 찾기 페이지로 이동합니다.');
});

signupLink.addEventListener('click', (e) => {
    //e.preventDefault();
    alert('회원가입 페이지로 이동합니다.');
});

// 소셜 로그인 버튼 클릭 이벤트
kakaoLoginBtn.addEventListener('click', () => {
    alert('카카오톡 간편 로그인 시도');
    // 카카오톡 로그인 API 호출 코드 추가
});

naverLoginBtn.addEventListener('click', () => {
    alert('네이버 간편 로그인 시도');
    // 네이버 로그인 API 호출 코드 추가
});

googleLoginBtn.addEventListener('click', () => {
    alert('구글 간편 로그인 시도');
    // 구글 로그인 API 호출 코드 추가
});
