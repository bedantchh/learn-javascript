
let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toUTCString())

let  myCreatedDate = new Date("02-12-2023")
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate.getMonth())
console.log(newDate.getDate())

console.log(newDate.toLocaleString('default',{
    month:"short"
}))