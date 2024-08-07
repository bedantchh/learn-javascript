// let myName = "Bedant    "

// console.log(myName.length)


let myHeros = ["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpideyPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}


Object.prototype.bedant = function() {
    console.log("Bedant is present in all objects!")
}

heroPower.bedant()
// heroPower.heyBedant()


Array.prototype.heyBedant = function(){
    console.log("Bedant is present in all arrays!")
}

myHeros.heyBedant()




// ineheritance

// --Old approach 
const User = {
    userName: "Learner",
    email: "learner@g.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : `JS Assignment`,
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User


// -- Modern syntax
Object.getPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "Bed     "

String.prototype.trueLength = function(){
    console.log(this.trim().length)
}

"He        ".trueLength()
anotherUserName.trueLength()