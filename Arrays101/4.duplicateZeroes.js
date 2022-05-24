var duplicateZeros = function (arr) {
    const len = arr.length
    for(let i = 0; i < len-1; i++) {
        if(arr[i] === 0) {
            for(let j = len-1; j > i; j--) {
                arr[j] = arr[j-1]
            }
            arr[i+1] = 0
            i++
        }
    }
    console.log(arr)
}

duplicateZeros([1,0,2,3,0,4,5,0])
