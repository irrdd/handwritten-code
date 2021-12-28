function promiseRace(promises){
    return new Promise(function(resolve,reject){
        promises.forEach(function(element,index){
            element.then(v=>{
                resolve(v);
            },r=>{
                reject(r);
            })
        })
    })
}