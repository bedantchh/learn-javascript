const marvel_heros = ["spiderman","thor","ironman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros] // we can use spread operator instead of concat as we can add multiple values


const another_array = [1,2,3,[2,3,4],5,6,5,[3,4,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Bedant"))

console.log(Array.from("Bed"))
console.log(Array.from({name : "bedant"})) // have to specify key or value, will learn this later

let score1 = 100
let score2 = 200
let score3 = 300
let score_array = Array.of(score1,score2,score3)

console.log(score_array)