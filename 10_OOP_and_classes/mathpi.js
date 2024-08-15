const descripter = Object.getOwnPropertyDescriptor(Math,'PI')

// console.log(descripter)


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    oderChai : function(){
        console.log("Chai nahi bani")
    } 
}



Object.defineProperty(chai, 'name' ,{
    writable: false,
    enumerable: false
})

for (const [key, value] of Object.entries(chai)) {

    if(typeof value !=='function'){
        console.log(`${key} : ${value}`)
    }
}


// console.log(Object.getOwnPropertyDescriptor(chai,"name"))