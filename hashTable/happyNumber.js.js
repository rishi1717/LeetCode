var isHappy = function (n) {
	var map = {}
	var tmp = 0

	if (n < 1) return false

	while (n !== 1 && !map[n]) {
		map[n] = true
		tmp = 0
		while (n > 0) {
			tmp += Math.pow(n % 10, 2)
			n = Math.floor(n / 10)
		}

		n = tmp
	}

	return n === 1
}

console.log(isHappy(19))