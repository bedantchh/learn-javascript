// for of

const numbers = [1,2,5,6]

for (const num of numbers) {
    // console.log(num);
}

const greetings = "Hello World!"
const greetingsNoSpace = []
for (const greet of greetings){
    if (greet === " ") {

        continue
    }
    greetingsNoSpace.push(greet)
    
}
// console.log(greetingsNoSpace)


// Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")

// console.log(map);

for (const [key , value] of map){
    console.log(key, "-", value)
}