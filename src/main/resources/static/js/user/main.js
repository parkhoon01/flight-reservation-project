document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const passengers = document.getElementById('passengers').value;

    if (!departure || !destination || !departureDate) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    // 검색 결과 페이지로 이동 (예시: search_results.html)
    alert(`항공편을 검색합니다: ${departure} → ${destination}, 출발 날짜: ${departureDate}, 인원수: ${passengers}`);
    window.location.href = 'search_results.html';
});
