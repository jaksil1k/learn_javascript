if (1 || 0) { // работает как if( true || false )
    alert( 'истинно!' );
}

alert( 1 || 0 ); // 1 (1 - истинное значение)
alert( true || 'какая-то строка' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)

true || alert("никогда не сработает");
false || alert("сработает");

a ||= b; // -> a || (a = b);

let johnHasCar = false;

johnHasCar ||= "У Джона нет машины!"; // то же самое, что false || (johnHasCar = "...")

alert( johnHasCar ); // "У Джона нет машины!"

// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "какая-то строка" ); // 0

a &&= b; // a && (a = b);

let greeting = "Привет"; // строка непустая, поэтому будет преобразована к логическому значению true оператором &&=

greeting &&= greeting + ", пользователь!"; // то же самое, что true && (greeting = greeting + "...")

alert( greeting ) // "Привет, пользователь!"



result = a ?? b // result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? "Аноним"); // Аноним (user не существует)


let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое значение, которое определено:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

let x = 1 && 2 ?? 3; // Синтаксическая ошибка

let userAge = null;

if (userAge === null || userAge === undefined) {
    userAge = 18;
}

/// userAge ??= 18;