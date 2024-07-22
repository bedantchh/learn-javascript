const coding = ['js','ruby','java','python','cpp']

// coding.forEach(function (items){
//     console.log(items)
// })


// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index , arrarylist) =>{
//     console.log(item, index , arrarylist)
// } )

const mylang = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    }
]

mylang.forEach( (value) => {
    console.log(value.languageFile)
})