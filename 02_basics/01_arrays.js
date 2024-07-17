// Arrays
const myArr = [1,2,3,4,5,6]

// console.log(myArr);

// Another way of declaring array

const myHeros = new Array("spiderman","ironman","antman")  // This doesnt needs sqaure brackets

//console.log(myHeros)


// Array methods

// myArr.push(8)
// myArr.pop()  // removes the last value in an array
// console.log(myArr)


myArr.unshift(999) // adds the given value in the start of the array
myArr.shift() // removes the first value in an array

// console.log(myArr)
// console.log(myArr.includes(2))
// console.log(myArr.indexOf(2))

const newArray = myArr.join()
// console.log(newArray)

console.log("A", myArr)

console.log(myArr.slice(1,3))
console.log("B", myArr)

console.log(myArr.splice(1,3))
console.log("C", myArr)

