document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signup-form");
    const usernameInput = document.getElementById("username");
    const checkUsernameBtn = document.getElementById("check-username-btn");
    const emailInput = document.getElementById("email");
    const checkEmailBtn = document.getElementById("check-email-btn");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const phoneInput = document.getElementById("phone");

    const passwordCheckResult = document.getElementById("password-check-result");
    const passwordMatchResult = document.getElementById("password-match-result");
    const usernameCheckResult = document.getElementById("username-check-result");
    const emailCheckResult = document.getElementById("email-check-result");

    // ✅ 아이디 중복 체크 버튼 클릭 이벤트
    checkUsernameBtn.addEventListener("click", function() {
        const username = usernameInput.value.trim();
        if (username === "") {
            usernameCheckResult.textContent = "아이디를 입력하세요.";
            usernameCheckResult.style.color = "red";
            return;
        }

        fetch(`/signup/check-id?id=${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    usernameCheckResult.textContent = "사용 가능한 아이디입니다.";
                    usernameCheckResult.style.color = "green";
                } else {
                    usernameCheckResult.textContent = "이미 사용 중인 아이디입니다.";
                    usernameCheckResult.style.color = "red";
                }
            })
            .catch(error => {
                console.error("아이디 중복 체크 오류:", error);
                usernameCheckResult.textContent = "중복 확인 중 오류 발생.";
                usernameCheckResult.style.color = "red";
            });
    });

    // ✅ 이메일 중복 체크 버튼 클릭 이벤트
    checkEmailBtn.addEventListener("click", function() {
        const email = emailInput.value.trim();
        if (email === "") {
            emailCheckResult.textContent = "이메일을 입력하세요.";
            emailCheckResult.style.color = "red";
            return;
        }

        fetch(`/signup/check-email?email=${email}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    emailCheckResult.textContent = "사용 가능한 이메일입니다.";
                    emailCheckResult.style.color = "green";
                } else {
                    emailCheckResult.textContent = "이미 사용 중인 이메일입니다.";
                    emailCheckResult.style.color = "red";
                }
            })
            .catch(error => {
                console.error("이메일 중복 체크 오류:", error);
                emailCheckResult.textContent = "중복 확인 중 오류 발생.";
                emailCheckResult.style.color = "red";
            });
    });

    // ✅ 비밀번호 입력 시 복잡성 체크
    passwordInput.addEventListener("input", function() {
        const password = passwordInput.value;
        if (password === "") {
            passwordCheckResult.textContent = "";
            return;
        }

        if (validatePassword(password)) {
            passwordCheckResult.textContent = "사용 가능한 비밀번호입니다.";
            passwordCheckResult.style.color = "green";
        } else {
            passwordCheckResult.textContent = "비밀번호를 다시 설정해야 합니다.";
            passwordCheckResult.style.color = "red";
        }
    });

    // ✅ 비밀번호 확인 (일치 여부 체크)
    confirmPasswordInput.addEventListener("input", function() {
        checkPasswordMatch();
    });

    function checkPasswordMatch() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        if (confirmPassword === "") {
            passwordMatchResult.textContent = "";
            return;
        }

        if (password === confirmPassword) {
            passwordMatchResult.textContent = "입력한 비밀번호가 일치합니다.";
            passwordMatchResult.style.color = "green";
        } else {
            passwordMatchResult.textContent = "비밀번호가 일치하지 않습니다.";
            passwordMatchResult.style.color = "red";
        }
    }

    // ✅ 회원가입 버튼 클릭 시 백엔드로 데이터 전송
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        // 🔹 입력값 검증
        if (!validatePassword(password)) {
            alert("비밀번호 조건을 확인하세요.");
            return;
        }
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        // 🔹 백엔드로 전송할 회원가입 데이터
        const requestData = {
            username: username,
            password: password,
            email: email,
            phoneNumber: phone
        };

        // 🔹 백엔드 API 요청
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
                    window.location.href = "login.html";  // 로그인 페이지로 이동
                } else {
                    alert("회원가입 실패: " + data.message);
                }
            })
            .catch(error => {
                console.error("회원가입 요청 오류:", error);
                alert("회원가입 중 오류가 발생했습니다.");
            });
    });

    // ✅ 유효성 검사 함수들
    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
        return regex.test(password);
    }
});
