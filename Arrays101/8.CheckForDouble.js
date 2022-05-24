var checkIfExist = function (arr) {
    let length = arr.length
    let result = false

    for (let i = 0; i<length; i++){
        let double = arr[i] * 2
        for(let j = 0; j<length; j++){
            if(i===j){
                continue
            }
            if(arr[j] == double){
                result = true
                break
            }
        }
    }
    return(result)
}

console.log(checkIfExist([-2, 0,4, 10, -19, -4, 6, -8]))