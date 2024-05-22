'use strict'

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError'; // Установка имени ошибки
    }
}
function validateNumber(value) {
    if (typeof value !== 'number') {
        throw new CustomError('Значение должно быть числом');
    }
    console.log('Валидация успешна');
}
try {
    validateNumber('42'); // Проверка на число с передачей строки вместо числа
} catch (error) {
    if (error instanceof CustomError) {
        console.error('Ошибка:', error.message); // Вывод сообщения об ошибке
        console.log('Тип ошибки:', error.name); // Вывод имени ошибки
    } else {
        console.error('Произошла ошибка:', error);
    }
}