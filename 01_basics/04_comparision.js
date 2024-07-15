console.log("2" > 1) // "2" get concerted into number
console.log("02" > 1)


console.log( null > 0 ) // null gets converted to 0 here
console.log( null == 0 ) // null doesnt gets converted to 0 here as equality operators work diffrently in js
console.log( null >= 0 )// null gets converted to 0 here so the output was true

console.log( undefined >= 0 ) // undefined always gives false output


// strict check ===

console.log("2" == 2) // returns true
console.log("2" === 2) // returns false as it checks the data type too