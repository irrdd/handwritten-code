function throttle(fn, delay) {
    let timer = null;
    return function () {
        let context = this | global
        if (timer) {
            return
        }
        setTimeout(()=>{
            fn.apply(context, arguments)
        },delay);
    }

}