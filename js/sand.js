"use strict";


let arr = ["Ваня", "Иштван"];
let ishvanIndex = arr.indexOf("Иштван");
arr.splice(ishvanIndex, 1, "Коля");
arr.splice(0, 0, 'Коля1', 'Маша');

console.log(arr);