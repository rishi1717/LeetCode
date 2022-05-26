var validMountainArray = function (arr) {
	let i = 0
	let j = arr.length - 1

	while (i < j) {
		if (arr[i + 1] > arr[i]) {
			i++
		} else {
			break
		}
	}

	while (j > 0) {
		if (arr[j - 1] > arr[j]) {
			j--
		} else {
			break
		}
	}

    return i >= j && i !== 0 && j !== arr.length - 1

}

console.log(validMountainArray([0, 2, 3,1, 2, 1]))