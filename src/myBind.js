Function.prototype.myBind = function (){
    if (typeof this !== 'function') {
        return
    }
    let context = arguments[0] || global
    context.fn = this
    let args = [...arguments]
    let arr = []
    for (let index = 1; index < args.length; index++) {
       arr.push(args[index])
    }
    return function (){
        context.fn(...arr)
        delete context.fn
    }



}

let obj = {
    age:18
}
function test() {
    console.log(this.age);
    console.log(arguments[0])
    console.log(arguments[1])
}
let aaa =  test.myBind(obj,11,23)
console.log(aaa);
aaa()