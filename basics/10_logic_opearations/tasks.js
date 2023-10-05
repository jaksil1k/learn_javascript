let value = NaN;

value &&= 10;//Nan
value ||= 20;//20
value &&= 30;//30
value ||= 40;//30

alert(value);//30

// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
if (-1 || 0) alert( 'first' );

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
if (-1 && 0) alert( 'second' );

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

/****************************/
let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (userName === '' || userName === null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}