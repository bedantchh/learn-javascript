// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regularUser = {
    email:"userone@gmail.com",
    username:{
        fullusername:{
            firstname: "bedant",
            lastname: "chhetri"
        }
    }
}
// console.log(regularUser.username.fullusername.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {4:"a", 3:"b"}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}  // we will use the spread operator to merge two or more objects just like arrays

// console.log(obj3);

const users = [
    {
        id: 1,
        email : "user1@gmail.com"
    },
    {
        id: 2,
        email : "user2@gmail.com"
    },
    {
        id: 3,
        email : "user3@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName : "js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
} 

const {courseInstructor: teacher} = course

// console.log(courseInstructor)
console.log(teacher);


// Example of JSON

// {
//     "name" : "Bedant",
//     "email" : "bedant@gmail.com",
//     "codesIn" : "JS"
// }

// JSON Can also be in arrays

// [
//     {},
//     {},
//     {}
// ]