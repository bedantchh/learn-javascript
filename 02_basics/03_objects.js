// singleton
// object.create            constructor method and singleton is made with this
const myKey = Symbol("key1")

const JsUser = {
    name: "bedant",
    "full name" : "Bedant Chhetri",
    [myKey] : "mykey1",
    age : 19,
    isLoggedIn :false,
    email: "bedant@gmail.comm",
    lastLogIn : ["24","June"]
}

// console.log(JsUser.name);
// console.log(JsUser['full name']);
// console.log(JsUser[myKey]);
JsUser.email = "bedantchhetri@gmail.com"
JsUser['full name'] = "new Bedant Chhetri"
// console.log(JsUser)
// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log(`hello ${this.name}`)
}
console.log(JsUser.greeting());
// console.log(JsUser);

