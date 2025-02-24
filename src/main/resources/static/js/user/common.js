// 헤더 및 푸터를 모든 페이지에 동적으로 로드
document.addEventListener("DOMContentLoaded", function () {
    loadHeader();
    loadFooter();
});

function loadHeader() {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("헤더 로드 실패:", error));
}

function loadFooter() {
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        })
        .catch(error => console.error("푸터 로드 실패:", error));
}
