//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

//solution
function multiplyNumeric(menu) {
    for (key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}