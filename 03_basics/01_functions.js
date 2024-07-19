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


console.log(loginMessage('ok'))