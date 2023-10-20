//У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
/*
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
 */
function sum(salaries) {
    let sum = 0;
    for (let salary in salaries) {
        sum += salaries[salary];
    }
    return sum;
}

alert(sum(salaries));