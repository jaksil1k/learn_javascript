alert(2 + 2 + '1' ); // будет "41", а не "221"
alert( 6 - '2' ); // 4, '2' приводится к числу
alert( 'type_conversion_6' / '2' ); // 3, оба операнда приводятся к числам
// Преобразует не числа в числа
alert( +true ); // 1
alert( +"" );   // 0

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // будет "41", а не "221"

let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // prompt_alert_5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // prompt_alert_5


//Тот факт, что = является оператором, а не «магической» конструкцией языка, имеет интересные последствия.
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

let counter = 1;
a = ++counter; // (*)

alert(a); // 2

counter = 1;
a = counter++; // (*) меняем ++counter на counter++

alert(a); // 1

// NOT(не) ( ~ ) not ( ! )

a = (1 + 2, 3 + 4);

alert( a ); // 7 (результат вычисления 3 + 4)

a = 1 + 2, 3 + 4;

alert(a); // 3