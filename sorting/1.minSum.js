var minimumSum = function (num) {
	num = num + ""
	let newNum = num.split("").sort((a, b) => a - b)
	let num1 = [newNum[0], newNum[2]].join('')
	let num2 = [newNum[1], newNum[3]].join('')
    return parseInt(num1) + parseInt(num2)
}

console.log(minimumSum(7341))
