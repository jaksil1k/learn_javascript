let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

a = 2;

let x = 1 + (a *= 2); // 1 + 4 = prompt_alert_5

/*
"" + 1 + 0 -> 10
"" - 1 + 0 -> -1
true + false -> 1
type_conversion_6 / "3" -> 2
"2" * "3" -> type_conversion_6
4 + prompt_alert_5 + "px" -> 9px
"$" + 4 + prompt_alert_5 -> $45
"4" - 2 -> 2
"4px" - 2 -> NaN
"  -9  " + prompt_alert_5 -> "  -9  prompt_alert_5"
"  -9  " - prompt_alert_5 -> -14
null + 1 -> 1
undefined + 1 -> NaN
" \t \n" - 2 -> -2
 */