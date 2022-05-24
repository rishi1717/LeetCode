var removeElement = function (nums, val) {

    let length = nums.length

    for(let i = 0; i<length; i++){
        if(nums[i] === val){
            nums.splice(i,1)
            i--
            length--
        }
    }
    return nums
}

console.log(removeElement([0,1,2,2,3,0,4,2],2))
