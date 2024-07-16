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


// +++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Refrence/Non Primitive)

let myName = "Bedant Chhetri"
let anotherName = myName

anotherName = "Zeno"

console.log(myName);
console.log(anotherName);



let userOne = {
    email : "bedant@gmail.com",
    upiId : "userone@sbi"
}

let userTwo = userOne

userTwo.email = "usertwo@gmail.com"

console.log(userOne.email);// email of user one get changed as this is stored in heap memory and the refrence is passed
console.log(userTwo.email);