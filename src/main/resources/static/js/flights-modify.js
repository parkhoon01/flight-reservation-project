// API 엔드포인트 기본 URL
const API_BASE_URL = 'http://localhost:8080/flight';

// 페이지 로드 시 실행되는 함수
document.addEventListener('DOMContentLoaded', () => {
    // URL에서 항공편 ID 추출
    const urlParams = new URLSearchParams(window.location.search);
    const flightId = urlParams.get('id');

    // ID가 존재하면 해당 항공편 정보 가져오기
    if (flightId) {
        fetchFlightDetails(flightId);
    }

    // 폼 제출 이벤트 리스너 추가
    document.getElementById('modifyFlightForm').addEventListener('submit', (e) => {
        e.preventDefault();
        modifyFlight(flightId);
    });
});

// 항공편 상세 정보를 가져오는 함수
async function fetchFlightDetails(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (response.ok) {
            const flightData = await response.json();
            populateForm(flightData);
        } else {
            console.error('Failed to fetch flight details');
        }
    } catch (error) {
        console.error('Error fetching flight details:', error);
    }
}

// 폼에 항공편 정보를 채우는 함수
function populateForm(flightData) {
    document.getElementById('flight_number').value = flightData.flight_number;
    document.getElementById('origin_airport').value = flightData.origin_airport;
    document.getElementById('destination_airport').value = flightData.destination_airport;
    document.getElementById('departure_date').value = formatDateTime(flightData.departure_date);
    document.getElementById('arrival_date').value = formatDateTime(flightData.arrival_date);
    document.getElementById('flight_company_name').value = flightData.flight_company_name;
    document.getElementById('gate_number').value = flightData.gate_number;
    document.getElementById('max_seat_capacity').value = flightData.max_seat_capacity;
    document.getElementById('current_status_id').value = flightData.current_status_id;
}

// 날짜 및 시간 형식을 HTML datetime-local 입력에 맞게 변환하는 함수
function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.toISOString().slice(0, 16);
}

// 항공편 정보를 수정하는 함수
async function modifyFlight(id) {
    // 폼에서 데이터 수집
    const flightData = {
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
        // PUT 요청으로 수정된 데이터 전송
        const response = await fetch(`${API_BASE_URL}/modify/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(flightData)
        });

        if (response.ok) {
            alert('항공편이 성공적으로 수정되었습니다.');
            window.location.href = '../admin/flights-list.html'; // 목록 페이지로 리다이렉트
        } else {
            alert('항공편 수정에 실패했습니다.');
        }
    } catch (error) {
        console.error('Error modifying flight:', error);
        alert('항공편 수정 중 오류가 발생했습니다.');
    }
}
