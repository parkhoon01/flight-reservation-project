// 탭 및 폼 요소 가져오기
const phoneTab = document.getElementById('phone-tab');
const emailTab = document.getElementById('email-tab');
const phoneForm = document.getElementById('find-password-phone-form');
const emailForm = document.getElementById('find-password-email-form');

// 탭 전환 이벤트
phoneTab.addEventListener('click', () => {
    switchTab('phone');
});

emailTab.addEventListener('click', () => {
    switchTab('email');
});

function switchTab(type) {
    if (type === 'phone') {
        phoneTab.classList.add('active');
        emailTab.classList.remove('active');
        phoneForm.classList.add('active');
        emailForm.classList.remove('active');
    } else {
        emailTab.classList.add('active');
        phoneTab.classList.remove('active');
        emailForm.classList.add('active');
        phoneForm.classList.remove('active');
    }
}

// 폼 제출 이벤트
phoneForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username-phone').value;
    const name = document.getElementById('name-phone').value;
    const birth = document.getElementById('birth-phone').value;
    const phone = document.getElementById('phone').value;
    const code = document.getElementById('phone-code').value;

    // 입력된 정보 확인 (디버깅용)
    console.log(`아이디: ${username}, 이름: ${name}, 생년월일: ${birth}, 휴대폰 번호: ${phone}, 인증번호: ${code}`);

    // 실제 비밀번호 찾기 로직을 여기에 추가합니다.
    // java에서 생성한 인증번호가 입력한 인증번호와 같은지 확인합니다.
    // 비밀번호 찾기를 누르면 reset_password(비밀번호 재설정) 페이지로 가야합니다.
    alert('비밀번호 찾기(휴대폰) 기능은 현재 구현되지 않았습니다.');
});

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username-email').value;
    const name = document.getElementById('name-email').value;
    const birth = document.getElementById('birth-email').value;
    const email = document.getElementById('email').value;
    const code = document.getElementById('email-code').value;

    // 입력된 정보 확인 (디버깅용)
    console.log(`아이디: ${username}, 이름: ${name}, 생년월일: ${birth}, 이메일: ${email}, 인증번호: ${code}`);

    // 실제 비밀번호 찾기 로직을 여기에 추가합니다.
    alert('비밀번호 찾기(이메일) 기능은 현재 구현되지 않았습니다.');
});
