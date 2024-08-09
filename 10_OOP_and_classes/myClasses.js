// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return (`${this.password}abc`)
    }

    changeUsername() {
        return (`${this.username.toUpperCase()}`)
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.changeUsername());
console.log(chai.encryptPassword());




// Behind the scenes

function User1(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
} 


User1.prototype.encryptPassword = function(){
    return (`${this.password}abc`)
}

const tea = new User1("tea","tea@gmail.com","tea123")
console.log(tea.encryptPassword())
