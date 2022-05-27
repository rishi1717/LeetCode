var replaceElements = function (arr) {
	let length = arr.length

	for (let i = 0; i < length; i++) {
		let a = arr[i+1]

		for (let j = i + 1; j < length; j++) {
			if (arr[j] > a) {
				a = arr[j]
			}
		}

		if (i === length - 1) {
			a = -1
		}
		arr[i] = a
	}
    return arr
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]))
