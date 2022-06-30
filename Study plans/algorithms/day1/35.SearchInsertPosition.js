var searchInsert = function (nums, target) {
	let left = 0
	let right = nums.length
	while (left < right) {
		let mid = Math.floor((left + right) / 2)
		if (nums[mid] === target) return mid
		if (nums[mid] > target) right = mid
		else left = mid + 1
	}
    return left
}

console.log(searchInsert([1,3], 2))
