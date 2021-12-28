Function.prototype.myCall = function (){
    if (typeof this !== 'function') {
        return
    }
    let context = arguments[0] || global
    context.fn = this
    console.log(context);
    let args = [...arguments]
    let arr = []
    for (let index = 1; index < args.length; index++) {
        arr.push(args[index])
    }
    context.fn(...arr)
   delete context.fn
}


let obj = {
    age:18
}
function test() {
    console.log(this.age);
    console.log(arguments[0])
    console.log(arguments[1])
}
test.myCall(obj,11,23)