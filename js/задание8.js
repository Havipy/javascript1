"use strict"

let recipeMap = new Map([
	["огурец", "500 гр."],
	["помидор", "350 гр."],
	["лук", "50 гр."]
]);

console.log("Ингридиенты для салата");

for (let ingridients of recipeMap) {
	console.log(`Продукт - ${ingridients[0]}, вес - ${ingridients[1]}`);
}