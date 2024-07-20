const user = {
    name:"Bedant",
    id:999,

    welcomeMessage : function(){
        console.log(`Hi ${this.name} , welcome to the website. Your id is ${this.id}.`)
    }
}

// user.welcomeMessage()

function chai(){
    user : "bed"
    console.log(this.user)
}
// chai()

// const chai2 = function(){
//     user : "bed"
//     console.log(this.user)
// }
// chai2()

const chai2 = () => {
    user : "bed"
    console.log(this)
}
// chai2()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//  ++++ Implicit return in arrow fn


// const addTwo = (num1,num2) =>  num1 + num2     ------------ we dont need to write return if we use (), but if we use {} we have to write retrun
// const addTwo = (num1,num2) =>  (num1 + num2)

// returning an object with arrow fn , we have to wrap it around ()
const addTwo = (num1,num2) =>  ({name: "bed"})


console.log(addTwo(3,7))