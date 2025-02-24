document.addEventListener("DOMContentLoaded", function () {
    const bookingsList = document.getElementById("bookings-list");

    // 예약 데이터를 로컬스토리지에서 불러오기 (기본 예제 데이터 포함)
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [
        {
            id: "123456",
            passengerName: "홍길동",
            departure: "서울 (ICN)",
            destination: "뉴욕 (JFK)",
            departureDate: "2025-06-01",
            seatClass: "이코노미"
        },
        {
            id: "789012",
            passengerName: "김철수",
            departure: "부산 (PUS)",
            destination: "도쿄 (NRT)",
            departureDate: "2025-07-10",
            seatClass: "비즈니스"
        }
    ];

    // 예약 내역을 화면에 표시
    function renderBookings() {
        bookingsList.innerHTML = ""; // 기존 데이터 초기화

        if (bookings.length === 0) {
            bookingsList.innerHTML = "<p>현재 예약된 항공편이 없습니다.</p>";
            return;
        }

        bookings.forEach((booking, index) => {
            const bookingCard = document.createElement("div");
            bookingCard.classList.add("booking-card");

            bookingCard.innerHTML = `
                <p><strong>예약 번호:</strong> ${booking.id}</p>
                <p><strong>탑승객 이름:</strong> ${booking.passengerName}</p>
                <p><strong>출발지:</strong> ${booking.departure}</p>
                <p><strong>도착지:</strong> ${booking.destination}</p>
                <p><strong>출발 날짜:</strong> ${booking.departureDate}</p>
                <p><strong>좌석 등급:</strong> ${booking.seatClass}</p>
                <button class="details-btn" onclick="goToReservationDetails('${booking.id}')">상세 정보</button>
                <button class="cancel-btn" data-index="${index}">예약 취소</button>
            `;

            bookingsList.appendChild(bookingCard);
        });

        // 예약 취소 버튼 이벤트 추가
        document.querySelectorAll(".cancel-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cancelBooking(index);
            });
        });
    }

    // 예약 상세 정보 페이지로 이동
    function goToReservationDetails(reservationId) {
        window.location.href = `reservation_details.html?id=${reservationId}`;
    }

    // 예약 취소 함수
    function cancelBooking(index) {
        if (confirm("정말로 이 예약을 취소하시겠습니까?")) {
            bookings.splice(index, 1); // 배열에서 해당 예약 제거
            localStorage.setItem("bookings", JSON.stringify(bookings)); // 업데이트된 예약 목록 저장
            renderBookings(); // 예약 목록 다시 렌더링
        }
    }

    renderBookings(); // 예약 목록 최초 렌더링
});
