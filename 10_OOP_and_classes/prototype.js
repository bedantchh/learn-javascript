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