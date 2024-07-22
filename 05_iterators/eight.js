const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc,curr) => acc + curr,0)
// console.log(myTotal)



const shoppingCart = [
    {
        item : "js course",
        price : 2999
    },
    {
        item : "React course",
        price : 2999
    }
]

const total = shoppingCart.reduce( (acc,curr) => acc+curr.price,0)
console.log(total)