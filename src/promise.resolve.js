function promiseResolve(value) {
    return new Promise(function (resolve, reject) {
        if (value instanceof Promise) {
            value.then(v=>{
                resolve(v);
            },r=>{
                reject(r)
            })
        }else{
            resolve(value)
        }
    })
}