// Показ модального окна с авторскими правами при первом посещении
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('termsAccepted')) {
        document.getElementById('copyrightModal').style.display = 'block';
    }

    // Обработчик принятия условий
    document.getElementById('acceptTerms').addEventListener('click', function () {
        localStorage.setItem('termsAccepted', 'true');
        document.getElementById('copyrightModal').style.display = 'none';
    });
});

// Обработчики для модального окна оплаты
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function () {
        const courseId = this.getAttribute('data-course-id');
        document.getElementById('paymentModal').style.display = 'block';
        // Здесь можно добавить логику для конкретного курса
    });
});

// Закрытие модальных окон при клике вне их
window.addEventListener('click', function (event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
});

// Обработка формы оплаты
document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Здесь должна быть логика обработки платежа
    alert('Платеж успешно обработан!');
    document.getElementById('paymentModal').style.display = 'none';
});