const user = []

if(user){
    // console.log("got user");
}
else{
    // console.log("No user");
}


// const arr = []
// if(arr.length === 0 ){
//     console.log("empty array")
// } else {
//     console.log("valid array");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("empty")
}else{
    // console.log("not empty ");
}


//falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// everything esle is a truthy value
// some examples of truthy values

// '0' , 'false' , " ", [] , {} , function (){}




// Nullish coalescing operator ?? null undefined

const value = 5 ?? 10

console.log(value);


// Terniary Operator 

// conditon ? true : false 

(2>1) ? console.log("2 is greater than 1") : console.log("nope");