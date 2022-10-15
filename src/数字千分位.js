/*
 * @Author: 王东旭
 * @Date: 2022-10-15 11:20:12
 * @LastEditTime: 2022-10-15 15:27:19
 * @LastEditors: 王东旭
 * @Description: 
 * @FilePath: \handwritten-code\数字千分位.js
 * @ 
 */
function splitNum(str){
    const arr = [...String(str)].reverse()
    const temp = []
    arr.forEach((val,index) => {
        if(index%3===0 && index!==0){
            temp.push(',')
        }
        temp.push(val)
    })
    return temp.reverse().join('')
}

function splitNum2(str){
    return Number(str).toLocaleString()
}
console.log(splitNum2(23444345));

