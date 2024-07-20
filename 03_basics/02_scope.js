

if(true){
    const a = 10
    let b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const name = "bedant"
    function two (){
        const lastname = "chhetri"
        // console.log(name)
    }
    // console.log(lastname)
    two()
}

one()


// ++++++++++++  INTRESTING ++++++++++++++

addone(5)
function addone (num){
    return num + 1
}



// when we declare a fn like this we cannot call it before the fn 
addtwo(5)

const addtwo = function(num){
    return num + 2
}
