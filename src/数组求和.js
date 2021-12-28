function arrayAdd(array){
    if (!Array.isArray(array)) {
        return
    }
    // let sum = 0

   let  sum = array.reduce((total,num)=>{
        return total + Number(num) 
    })
    return sum
}

console.log(arrayAdd([1,2,3,4,5]));