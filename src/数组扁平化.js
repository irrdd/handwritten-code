//有瑕疵，数组中无论什么格式都会变成字符串
function myflat1(arr){
    if (!Array.isArray(arr)) {
        return
    }
    let arrStr = arr.toString()

    let temp = arrStr.split(',')
   
    return temp
}

function myflat2(arr){
    if (!Array.isArray(arr)) return arr
    let temp = []
    arr.map(element=>{
        temp = temp.concat(myflat2(element))
    })
    return temp

}
function myflat3(arr){
    return arr.reduce((prv,next)=>{
        if (!Array.isArray(next)){
            prv.push(next)
        }else{
           prv =  prv.concat(myflat3(next))
        }
        return prv
    },[])
}
//带深度
function myflat(arr,deep){
    if (!Array.isArray(arr) || deep<=0) return arr
    let temp = []
    arr.map(element=>{
        temp = temp.concat(myflat(element,deep-1))
    })
    return temp

}



let arr = [1,2,[3,4,[5,'dsgf',[2]]]];
// let arr2 = arr.flat(Infinity)
let arr2 = myflat(arr,2)
console.log(arr2);

// console.log([1,2].concat([1]));