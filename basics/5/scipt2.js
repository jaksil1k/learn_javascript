//Type Conversion
let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

alert( "6" / "2" );//3

alert( Number("123z") );// NaN (ошибка чтения числа на месте символа "z")

alert(null);//0
alert(undefined);//NaN

/*
true / false	1 / 0
string	Пробельные символы по краям обрезаются.
Далее, если остаётся пустая строка, то получаем 0,
иначе из непустой строки «считывается» число. При ошибке результат NaN.
*/