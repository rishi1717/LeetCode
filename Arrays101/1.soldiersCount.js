var findMaxConsecutiveOnes = function (nums) {
	let count = 0,
		max = 0
	nums.forEach((num) => {
		if (num) {
			count++
		} else {
			count = 0
		}

		max = count > max ? count : max
	})
	return max
}

console.log(
	findMaxConsecutiveOnes([1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1])
)
