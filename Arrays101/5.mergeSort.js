var merge = function (nums1, m, nums2, n) {
	let finalLength = m + n

	for (let i = n - 1; i >= 0; i--) {
        console.log(i)
		for (let j = 0; j < finalLength; j++) {
			if (nums1[j] > nums2[i]) {
				nums1.splice(j, 0, nums2[i])
				nums1.pop()
				j = finalLength
				console.log(nums1)
			} else if (j === m) {
				nums1.splice(j, 0, nums2[i])
				nums1.pop()
				j = finalLength
				console.log(nums1)
			}
		}
	}
}

merge([0,0,3,0,0,0,0,0,0],
3,
[-1,1,1,1,2,3],
6)
