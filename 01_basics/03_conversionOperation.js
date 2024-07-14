let score = "22"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))

// "22" => 22
// "22abc" => NaN (but the typeOf NaN is number)
// true => 1


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true , 0 => false
// "" => false
// "abc" => true


let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber)
console.log(typeof(stringSomeNumber))