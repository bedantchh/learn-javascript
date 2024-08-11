function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function calc(a,b, operator){
    return operator(a,b)
}

console.log(calc(10,5,multiply))