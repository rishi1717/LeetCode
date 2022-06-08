var smallerNumbersThanCurrent = function (nums) {
    let smaller=[]
    for(var i = 0; i < nums.length; i++) {
        var count = 0;
        for(var j = 0; j < nums.length; j++) {
            if(nums[j] < nums[i]) {
                count++;
            }
        }
        smaller[i] = count;
    }
    return smaller;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))