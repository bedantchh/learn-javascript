const accountId = 89
let accountEmail = "bedant@gmail.com"
var accountPassword = "123456"
accountCity = "Siliguri"

let accountState; //If we just declare the variable without its value, it will be undefined

// accountId = 2 cant change this as this is a constant

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer note to use var
because of issue in block scope and function scope
*/