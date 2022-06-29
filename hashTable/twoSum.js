var twoSum = function (nums, target) {
	let indices = new Map()
	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i]
		if (indices.has(diff)) {
			return [indices.get(diff), i]
		}
		indices.set(nums[i], i)
	}
}

console.log(twoSum([3, 10, 11, 15,2,7], 9))
