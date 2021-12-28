function debounce(fn,delay){
    let timer = null;
    return function(){
        let context = this || global;
        if(timer){
            clearTimeout(timer);
            timer = null;
        }

        setTimeout(()=>{
            fn.apply(context,arguments)
        },delay);
    }

}