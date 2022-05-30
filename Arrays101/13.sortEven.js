var sortArrayByParity = function (nums) {
    let len = nums.length
    let left = 0;
    let right = len - 1;
    while (left < right) {
        if(nums[left] % 2 === 0) {
            left++;
        }
        else {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            right--;
        }
    }
    return(nums)
}

console.log(sortArrayByParity([3,1,2,4]))