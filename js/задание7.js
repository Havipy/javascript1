let arr = [1, 3, 4, 5, 7, 0, "11", "sdk", { type: 11 }];
let evenNum = 0;
let oddNum = 0;
let zeroNum = 0;
arr.forEach(element => {
	if (!isNaN(+element) & typeof (element) != 'string') {
		if (element % 2 === 0) {
			if (element === 0) {
				zeroNum++;
			}
			else {
				evenNum++;
			}

		}
		else {
			oddNum++;
		}
	}

});

console.log(`Массив - ${arr}
Кол-во четных - ${evenNum}, нечетных - ${oddNum}, нулей - ${zeroNum}`)
