/*
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
 */

// let js = prompt("Какое «официальное» название JavaScript?")
//
// if (js == "ECMAScript") {
//     alert("True!")
// } else {
//     alert("Не знаете? ECMAScript!")
// }

/*
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
 */
 let number = prompt("write a number");
 alert(number > 0? 1: (number == 0) ? 0: -1);

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';