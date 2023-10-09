function showMessage() {
    alert( 'Всем привет!' );
}

showMessage();
showMessage();

function showMessage(from, text = anotherFunction()) {
    // anotherFunction() выполнится только если не передан text
    // результатом будет значение text
}

function doNothing() {
    return;
}

alert( doNothing() === undefined ); // true

