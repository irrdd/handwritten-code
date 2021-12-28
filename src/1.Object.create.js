function create(obj){
    function Fn(){}
    Fn.prototype = obj
    return new Fn()
}
let aaa = create([])
console.log(aaa)