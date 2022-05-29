var moveZeroes = function (nums) {
    let len = nums.length
    let write = 0

    for (let i = 0; i < len; i++) {
        if(nums[i] != 0){
            nums[write] = nums[i]
            write++
        }
    }

    while(write<len){
        nums[write] = 0
        write++
    }

    return nums

}

console.log(moveZeroes([0,1,0,3,12]))