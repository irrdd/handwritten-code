function lengthSubString(str){
    let map = new Map();
    let i = -1
    let res = 0
    for(let j = 0; j < str.length;j++){
        if(map.has(str[j])){
            i = Math.max(i,map.get(str[j]))
        }
        res = Math.max(res,j-i)
        map.set(str[j],j)
    }
    console.log(map);
    return res

}
let str = 'hskhdvbui8hushdgg'

console.log(lengthSubString(str));