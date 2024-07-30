const person = {
    name: "Bedant",
    age: 19,
    isLoggedIn: true,

    getUserDetails: function(){
        // console.log("Got user details form database!")
        // console.log(`Username: ${this.name}`)
        console.log(this);
    }
}

// console.log(person.age)
// console.log(person.getUserDetails())



function User(username, age , isLoggedIn){
    this.username = username
    this.age = age
    this.isLoggedIn = isLoggedIn
    
    this.greetings = function(){
        console.log(`Hello! ${this.username}`);
    }
    
    return this
}

const userOne = new User("Bedant", 19 , true)
const userTwo = new User("Chhetri",20,false)
// console.log(userOne.greetings())
console.log(userOne.constructor)
// console.log(userTwo)