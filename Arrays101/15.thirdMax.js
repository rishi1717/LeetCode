var thirdMax = function (nums) {
	let len = nums.length
	nums.sort((a, b) => {
		return a - b
	})
	for (let i = 0; i < len; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1)
			i--
			len--
		}
	}
	if (len >= 3) {
		return nums[len - 3]
	} else {
		return nums[len - 1]
	}
}

console.log(thirdMax([3, 2, 1, 4]))
