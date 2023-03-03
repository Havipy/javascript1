let arr = [1, 3, 4, 5, 7];
console.log("Количество элементов массива: " + arr.length);
arr.forEach((element, index, array) => {
	console.log(`${element} находится на позиции ${index} в ${array}`)
});
