const name = "Bedant"
let repoCount = 7

console.log(`Hello! My name is ${name} and my repo count is ${repoCount}. `);


const gameName = new String('Bedant-ch')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4))
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,3)
console.log(newString);

const newStringOne = '   bedant   '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "www.google.com/bedant%20chhetri"

console.log(url.replace('%20','-'));
console.log(url.includes('bedant'));