Function.prototype.myApply= function(){
    if (typeof this !== 'function') {
        return
    }
    let context = arguments[0] || global
    context.fn = this

    let args =arguments[1]

   
    context.fn(...args)
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
test.myApply(obj,[11,23])