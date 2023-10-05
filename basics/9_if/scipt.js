let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) {
    alert( 'Да вы знаток!' );
} else {
    alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
}

let age = prompt('Сколько вам лет?', '');
let accessAllowed = age > 18 ? true : false;

let message = (age < 3) ? 'Здравствуй, малыш!' :
    (age < 18) ? 'Привет!' :
        (age < 100) ? 'Здравствуйте!' :
            'Какой необычный возраст!';

alert( message );