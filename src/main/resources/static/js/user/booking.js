document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const birthDate = document.getElementById('birth-date').value;
    const passportNumber = document.getElementById('passport-number').value;

    if (!fullName || !birthDate || !passportNumber) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    alert('예약이 완료되었습니다. 결제 페이지로 이동합니다.');
    window.location.href = 'payment.html';
});
