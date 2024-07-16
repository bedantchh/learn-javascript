const score = 400

const balance = new Number(100)

console.log(score);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 295.8993
console.log(otherNumber.toPrecision(3));

const bigNum = 1000000
console.log(bigNum.toLocaleString('en-IN'))


// +++++++++++ Maths +++++++++++++++
const negative = -99
// console.log(Math.abs(negative));
// console.log(Math.round(4.89));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(2,3,1,5,0));
// console.log(Math.max(2,3,1,5,0));

console.log(Math.floor((Math.random()*10)+1))

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max-min + 1)) + min ));