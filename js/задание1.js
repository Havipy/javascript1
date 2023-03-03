"use strict"
let num = +prompt("Введите число: ");

if (isNaN(num)) {
	console.log("Ошибка! нужно ввести число");
}
else {
	if (num % 2 == 0) {
		console.log("Число четное");
	}
	else {
		console.log("Число нечетное");
	}
}