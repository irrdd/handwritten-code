function uniqueArray(array) {
    if (!Array.isArray(array)) {
        return
    }
    let arr =[]
    array.map(element=>{
        // if (!arr.includes(element)) {
        //    arr.push(element) 
        // }
        if (arr.indexOf(element) === -1) {
            arr.push(element) 
        }
    })
    return arr
}

let arr = [1,2,7,3,4,5,6,4,5,6,5,8]

console.log(uniqueArray(arr));