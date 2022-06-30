var containsDuplicate = function (nums) {
	const hashTable = new Map()
	for (let n of nums) {
		if (hashTable.has(n)) return true
		else hashTable.set(n, true)
	}
	return false
}

console.log(containsDuplicate([1, 2, 3, 1]))