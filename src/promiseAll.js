function promiseAll(promises){
    return new Promise(function(resolve,reject){
        if(!Array.isArray(promises)) return
        let count = 0;
        let arr = []
        promises.forEach((element,index) =>{
            promises[index].then(v=>{
                count++;
                arr[index] = v
                if (count === promises.length) {
                    resolve(arr)
                }
            },r=>{
                reject(v)
            })
        })
    })

}