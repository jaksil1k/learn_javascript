for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Значение на координатах (${i},${j})`, '');

        // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
    }
}

alert('Готово!');

// we can like this

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Значение на координатах (${i},${j})`, '');

        // если пустая строка или Отмена, то выйти из обоих циклов
        if (!input) break outer; // (*)

        // сделать что-нибудь со значениями...
    }
}

alert('Готово!');


let num;

do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);