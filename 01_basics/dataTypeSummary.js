// #Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

let id = Symbol('22')
let anotherId= '22'

console.log(id === anotherId);


// #Non-Primitive / Refrence

//Array, Objects, functions

const heros = ["spiderman","ironman","antman"]

let myObject = {
    name : "Bedant",
    age : 20,
}

const myFn = function(){
    console.log("Hello world");
}


