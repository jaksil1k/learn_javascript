/*
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.
 */

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

console.log("asdsaD", sorted)
console.log(arr)

function copySorted(arr) {
    return JSON.parse(JSON.stringify(arr)).sort();
}