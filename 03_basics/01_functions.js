function sayMyName(){
    console.log("B");
    console.log("E");
    console.log("D");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName()
// sayMyName()
// sayMyName()

// function addTwoNumbers(num1 , num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(2,8)

// console.log(result);


function loginMessage(username){
    if (username === undefined){
        console.log("Enter a valid username.")
    }else{
        return `${username} just logged in.`
    }
    
}


// console.log(loginMessage('ok'))

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(300,800,100))


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(300,800,100,2000))

const user = {
    username : "bedant",
    salary : "8000"
}

function displayuser(anyobject){
    console.log(`the username is ${anyobject.username} and the salary is ${anyobject.salary}`)
}

// displayuser(user)

const myNewArray = [200,300,400,600]

function returnSecondValue (getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))