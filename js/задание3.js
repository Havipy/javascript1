let helloString = "hello";
function reverseString(str) {
	return str.split("").reverse().join("");
}
console.log(reverseString(helloString))