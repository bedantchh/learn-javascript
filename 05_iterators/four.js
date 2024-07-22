const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby'
}

for (const key in myObject) {
    // console.log(`${key} - ${myObject[key]}`)
}




const user = {
    name: "bedant",
    age: "19",
    country: "India"
}

for (key in user){
    console.log(key,user[key])
}