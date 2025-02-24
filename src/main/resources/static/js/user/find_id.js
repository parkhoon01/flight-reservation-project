// 탭 및 폼 요소 가져오기
const phoneTab = document.getElementById('phone-tab');
const emailTab = document.getElementById('email-tab');
const phoneForm = document.getElementById('find-id-phone-form');
const emailForm = document.getElementById('find-id-email-form');

// 탭 전환 이벤트
phoneTab.addEventListener('click', () => switchTab('phone'));
emailTab.addEventListener('click', () => switchTab('email'));

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

// 휴대폰 방식 아이디 찾기
phoneForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('name-phone').value;
    const phoneNumber = document.getElementById('phone').value;

    try {
        const response = await fetch('/find-id/phone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, phoneNumber })
        });

        const result = await response.text();
        if (response.ok) {
            if (confirm(`아이디: ${result}\n확인을 누르면 창이 닫힙니다.`)) {
                console.log("사용자가 확인을 눌렀습니다.");
            }
        } else {
            confirm(result);
        }
    } catch (error) {
        confirm("서버 오류가 발생했습니다.");
    }
});

// 이메일 방식 아이디 찾기
emailForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('name-email').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/find-id/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email })
        });

        const result = await response.text();
        if (response.ok) {
            if (confirm(`아이디: ${result}\n확인을 누르면 창이 닫힙니다.`)) {
                console.log("사용자가 확인을 눌렀습니다.");
            }
        } else {
            confirm(result);
        }
    } catch (error) {
        confirm("서버 오류가 발생했습니다.");
    }
});
