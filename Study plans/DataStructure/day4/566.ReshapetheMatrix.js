var matrixReshape = function (mat, r, c) {
    let matArr = mat.flat()
    let len = matArr.length
    if(len != r * c) return mat
    
    let res = [], k = 0
    for(let i =0; i<r; i++){
        let row = []
        for(let j = 0; j<c; j++){
            row[j] = matArr[k]
            k++
        }
        res.push(row)
    }
    return res
}

matrixReshape([[1, 2], [3, 4]], 1, 4)
