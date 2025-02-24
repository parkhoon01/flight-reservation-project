// API 엔드포인트 기본 URL
const API_BASE_URL = 'http://localhost:8080/flight';

// 항공편 목록 가져오기
async function getFlights() {
    try {
        const response = await fetch(API_BASE_URL);
        if(!response.ok){
            console.error(`HTTP error! status: ${response.status}`);
        }
        const flights = await response.json();
        displayFlights(flights);
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
}

// 항공편 목록 화면에 표시
function displayFlights(flights) {
    const flightsList = document.getElementById('flightsList');
    flightsList.innerHTML = '';
    flights.forEach(flight => {
        const row = `
            <tr>
                <td>${flight.flight_id}</td>
                <td>${flight.flight_number}</td>
                <td>${flight.origin_airport}</td>
                <td>${flight.destination_airport}</td>
                <td>${new Date(flight.departure_date).toLocaleString()}</td>
                <td>${new Date(flight.arrival_date).toLocaleString()}</td>
                <td>${flight.flight_company_name}</td>
                <td>${flight.gate_number}</td>
                <td>${calculateFlightDuration(flight.arrival_date, flight.departure_date)}</td>
                <td>${flight.max_seat_capacity}</td>
                <td>${flight.current_status_id}</td>
            </tr>
        `;
        flightsList.innerHTML += row;
    });
}

// 비행 소요시간 계산
function calculateFlightDuration(departureTime, arrivalTime) {
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const duration = (arrival - departure) / 1000 / 60; // 분 단위로 계산
    const hours = Math.floor(duration / 60);
    const minutes = Math.round(duration % 60);
    return `${hours}시간 ${minutes}분`;
}

// 새 항공편 추가 폼 표시
function showAddFlightForm() {
    document.getElementById('addFlightForm').style.display = 'block';
}

// 새 항공편 추가
async function addFlight(event) {
    event.preventDefault();
    const newFlight = {
        flight_number: document.getElementById('flight_number').value,
        origin_airport: document.getElementById('origin_airport').value,
        destination_airport: document.getElementById('destination_airport').value,
        departure_date: document.getElementById('departure_date').value,
        arrival_date: document.getElementById('arrival_date').value,
        flight_company_name: document.getElementById('flight_company_name').value,
        gate_number: document.getElementById('gate_number').value,
        max_seat_capacity: parseInt(document.getElementById('max_seat_capacity').value),
        current_status_id: document.getElementById('current_status_id').value
    };

    try {
        const response = await fetch(`${API_BASE_URL}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFlight)
        });
        if (response.ok) {
            getFlights(); // 목록 새로고침
            document.getElementById('newFlightForm').reset();
            document.getElementById('addFlightForm').style.display = 'none';
        }
    } catch (error) {
        console.error('Error adding new flight:', error);
    }
}

// 항공편 삭제
async function deleteFlight(id) {
    if (confirm('이 항공편을 삭제하시겠습니까?')) {
        try {
            const response = await fetch(`${API_BASE_URL}/delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(id)
            });
            if (response.ok) {
                getFlights(); // 목록 새로고침
            }
        } catch (error) {
            console.error('Error deleting flight:', error);
        }
    }
}

// 항공편 상세 정보 보기
function viewFlightDetail(id) {
    alert(`항공편 ID ${id}의 상세 정보 보기 기능은 아직 구현되지 않았습니다.`);
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    getFlights();
    document.getElementById('newFlightForm').addEventListener('submit', addFlight);
});