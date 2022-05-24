var sortedSquares = function (nums) {
	let square = nums.map((num) => {
		return num * num
	})
	square.sort((a, b) => a - b)
	return square
}

console.log(sortedSquares([-3, -1, 0, 3, 5]))
