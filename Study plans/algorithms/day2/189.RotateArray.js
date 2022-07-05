var rotate = function (nums, k) {
	k = k % nums.length 
	for (let i = 0; i < k; i++) {
		for(let j = nums.length - 1; j > 0; j--) {
			let temp = nums[j]
			nums[j] = nums[j - 1]
			nums[j - 1] = temp
		}
	}
	return nums
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 123123123))
