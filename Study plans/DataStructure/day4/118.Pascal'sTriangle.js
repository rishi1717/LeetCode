var generate = function (numRows) {
	if (numRows === 0) return []
	if (numRows === 1) return [[1]]
	if (numRows === 2) return [[1], [1, 1]]
	let i = 3
	let res = [[1], [1, 1]]
	while (i <= numRows) {
		let row = [1]
		for (let j = 1; j < i - 1; j++) {
			row.push(res[i - 2][j - 1] + res[i - 2][j])
		}
		row.push(1)
		res.push(row)
        i++
	}
	return res
}

console.log(generate(7))
