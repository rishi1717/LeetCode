var search = function (nums, target) {
    let left = 0, right = nums.length - 1
    while ( left <= right ) {
        if (nums[left] === target) return left
        if (nums[right] === target) return right
        mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) return mid
        else if(nums[mid]>target) right = mid - 1
        else left = mid + 1
    }
    return -1
}

console.log(search([1,4, 2,1, 3,,9, 1], 7))