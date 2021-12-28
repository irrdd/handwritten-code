function imageAsync(url){
    return new Promise(function (resolve, reject) {
        let img = new Image();
        img.src = url;
        img.onload = function (){
            console.log('图片请求成功');
            resolve(img);
        }
        img.onerror = function (err){
            console.log('图片请求失败');
            reject(err)
        }

    })
}
imageAsync(url).then((img=>{
    console.log('加载成功')
}),(err=>{
    console.error(err)
}))