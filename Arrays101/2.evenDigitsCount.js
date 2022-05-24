var findNumbers = function (nums) {
	let count = 0
	nums.forEach((num) => {
		if (num.toString().length % 2 === 0) {
			count++
		}
	})
	return count
}

console.log(findNumbers([1, 20, 3, 4, 5, 6, 7, 8, 9, 10]))