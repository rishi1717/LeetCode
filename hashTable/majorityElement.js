function majorityElement(nums) {
	let numsObj = {}
	let maxFreq = 0
	let maxElement = null
	for (let num of nums) {
		numsObj[num] = numsObj[num] + 1 || 1
	}
	for (let num in numsObj) {
		if (numsObj[num] > maxFreq) {
			maxFreq = numsObj[num]
			maxElement = parseInt(num)
		}
	}
	return maxElement
}
console.log(majorityElement([3, 2, 3]))
