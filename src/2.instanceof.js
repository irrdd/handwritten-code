function myInstanceof(left, right){
    let leftProto = Object.getPrototypeOf(left); //
    let rightProto = right.prototype;
    // let rightProto = Object.getPrototypeOf(right);
    console.log(Object.getPrototypeOf(right));
    console.log(right._proto_);
    while(true){
        if(!leftProto) return false; //原型链的尽头是null
        if (leftProto === rightProto) return true;
        leftProto = Object.getPrototypeOf(leftProto);
    }
}

console.log(myInstanceof({},Object)) 