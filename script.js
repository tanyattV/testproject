document.addEventListener('DOMContentLoaded', function() {
    // Функция для выставления конкретной оценки
    function setGrade(grade) {
        const inputs = document.querySelectorAll('.grade-input');
        inputs.forEach(input => {
            input.value = grade;
        });
    }

    // Добавление студента
    document.getElementById('add-student').addEventListener('click', function() {
        const table = document.getElementById('students-table');
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        cell1.innerHTML = `<input type="text" placeholder="Введите имя">`;
        cell2.innerHTML = `<input type="text" class="grade-input">`;
    });

    // Кнопки для выставления конкретных оценок
    document.getElementById('set-grade-2').addEventListener('click', function() {
        setGrade(2);
    });
    document.getElementById('set-grade-3').addEventListener('click', function() {
        setGrade(3);
    });
    document.getElementById('set-grade-4').addEventListener('click', function() {
        setGrade(4);
    });
    document.getElementById('set-grade-5').addEventListener('click', function() {
        setGrade(5);
    });

    // Очистка всех полей ввода
    document.getElementById('clear-fields').addEventListener('click', function() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    });

    // Вычисление среднего балла
    document.getElementById('calculate-average').addEventListener('click', function() {
        const inputs = document.querySelectorAll('.grade-input');
        let sum = 0;
        let count = 0;

        inputs.forEach(input => {
            const value = Number(input.value);
            if (!isNaN(value) && value !== 0) {
                sum += value;
                count++;
            }
        });

        if (count > 0) {
            const average = sum / count;
            alert('Средний балл: ' + average.toFixed(1));
        } else {
            alert('Нет оценок для вычисления среднего балла.');
        }
    });
});