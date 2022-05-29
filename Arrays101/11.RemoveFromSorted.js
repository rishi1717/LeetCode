var removeDuplicates = function (nums) {
	let length = nums.length
	let check = []

	for (let i = 0; i < length; i++) {
		if (check.includes(nums[i])) {
			nums.splice(i, 1)
			i--
			length--
		} else {
			check.push(nums[i])
		}
	}
    return (nums)
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))