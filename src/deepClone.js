function deepClone(obj){
    if (!obj || typeof obj !== 'object') return  obj
    if (typeof obj ==='function') {
        return obj
    }
    let obj1 = Array.isArray(obj) ? []:{}
    if (Array.isArray(obj)) {
        obj.forEach(element=>{
            obj1.push(deepClone(element))
        })
    }
    if (typeof obj === 'object') {
        Object.keys(obj).forEach(element=>{
            obj1[element] = deepClone(obj[element]);
        })
    }
    return obj1
}

obj1 = {
    a:1,
    b:{
        c:'df'
    },
    d:function(){},
    f:[1,2,3,{
        df:'sgsdfg'
    }]

}

// let obj2 = deepClone(obj1)
let obj2 = obj1
console.log(obj1 === obj2);