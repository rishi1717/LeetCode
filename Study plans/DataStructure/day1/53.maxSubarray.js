var maxSubArray = function (nums) {
    let max = -Infinity
    let sum = -Infinity
    for (let n of nums) {
        sum = Math.max(0, sum)
        sum += n
        max = Math.max(max, sum)
    } 
    return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))