document.addEventListener("DOMContentLoaded", function () {
    const fullNameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");

    // 로컬스토리지에서 기존 사용자 정보 불러오기
    fullNameInput.value = localStorage.getItem("userFullName") || "홍길동";
    emailInput.value = localStorage.getItem("userEmail") || "hong@example.com";
    phoneInput.value = localStorage.getItem("userPhone") || "010-1234-5678";

    // 프로필 저장
    document.getElementById("profile-form").addEventListener("submit", function (event) {
        event.preventDefault();

        localStorage.setItem("userFullName", fullNameInput.value);
        localStorage.setItem("userEmail", emailInput.value);
        localStorage.setItem("userPhone", phoneInput.value);

        alert("프로필 정보가 저장되었습니다.");
    });

    // 로그아웃 기능
    document.getElementById("logout-btn").addEventListener("click", function () {
        if (confirm("로그아웃 하시겠습니까?")) {
            localStorage.clear();
            window.location.href = "login.html";
        }
    });
});
