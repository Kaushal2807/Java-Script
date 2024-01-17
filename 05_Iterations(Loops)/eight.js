const myNums = [1,2,3]

const myTotal = myNums.reduce(function(acc,currval) {
    console.log(`acc:${acc} and currval:${currval}`);
    return acc + currval
},1)

console.log(myTotal);

// arrow function

const myTotal1 = myNums.reduce((acc,currval) => (acc + currval), 0)
console.log(myTotal1);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "Java",
        price : 1999
    },
    {
        itemName : "Web Development",
        price : 2500
    },
    {
        itemName : "Python",
        price : 30000
    },
]

const priceTopay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceTopay);