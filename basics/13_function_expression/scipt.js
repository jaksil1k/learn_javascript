function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "Вы согласны." );
}

function showCancel() {
    alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);


/**********************************/
let age = prompt("Сколько Вам лет?", 18);

// в зависимости от условия объявляем функцию
if (age < 18) {

    function welcome() {
        alert("Привет!");
    }

} else {

    function welcome() {
        alert("Здравствуйте!");
    }

}

// ...не работает
welcome(); // Error: welcome is not defined