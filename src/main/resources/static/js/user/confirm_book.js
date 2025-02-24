function goToHome() {
    window.location.href = "main.html";
}

// 예약 정보를 로컬스토리지에서 가져와 표시
document.addEventListener("DOMContentLoaded", function () {
    const reservationId = localStorage.getItem("reservationId") || "123456789";
    const passengerName = localStorage.getItem("passengerName") || "홍길동";
    const departure = localStorage.getItem("departure") || "서울 (ICN)";
    const destination = localStorage.getItem("destination") || "뉴욕 (JFK)";
    const departureDate = localStorage.getItem("departureDate") || "2025-06-01";
    const seatClass = localStorage.getItem("seatClass") || "이코노미";

    document.getElementById("reservation-id").textContent = reservationId;
    document.getElementById("passenger-name").textContent = passengerName;
    document.getElementById("departure").textContent = departure;
    document.getElementById("destination").textContent = destination;
    document.getElementById("departure-date").textContent = departureDate;
    document.getElementById("seat-class").textContent = seatClass;
});
