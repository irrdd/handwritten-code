function promisesReject(value) {
    return new Promise(function (resolve, reject) {
        reject(value);
    })
}