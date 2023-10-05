//wouldn't be error
let message = "hello";
message = 123456;

//number
let n = 123;
n = 12.345;
//special values: Infinity, -Infinity and NaN
alert(1 / 0);// Infinity
alert("not a number" / 2); // NaN, error
n = NaN ** 0;// 1

//BigInt
// number can work between -(2^53 - 1) < x < (2^53 - 1)
//number can exceed 2^53 up to 10^308, but it will be not accurate
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// at the end symbol "n" means that is BigInt
const bigInt = 1234567890123456789012345678901234567890n;


//String
// between " and ' no difference
// ` can use expressions ${..}
let name = "Ivan";
alert( `Hi, ${name}`)

let ver
typeof ver // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

//Task
let name = "Ilya";

// выражение - число 1
alert( `hello ${1}` ); // hello 1

// выражение - строка "name"
alert( `hello ${"name"}` ); // hello name

// выражение - переменная, вставим её в строку
alert( `hello ${name}` ); // hello Ilya