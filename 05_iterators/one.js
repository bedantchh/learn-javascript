// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i === 7) {
        // console.log("7 is the best")
    }
    // console.log(element);
    
}

for (let i = 0; i < 2; i++) {
    // console.log(`Outer loop value ${i}`)

    for (let j = 0; j < 2; j++) {
        const element = j;
        // console.log(`Inner loop value ${j}`)
        
    }
    
}

let myArray = ["one","two","three","four"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}


for (let index = 1; index <= 20; index++) {
    if (index === 7) {
        // console.log("7 Detected");
        break
    }
    // console.log(`value is ${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("5 Detected");
        continue
    }
    console.log(`value is ${index}`);
    
}