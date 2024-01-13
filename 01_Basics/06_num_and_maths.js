const score = 400
console.log(score);

const balance = new Number(100)

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.5222266;
console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // abs - Absolute Value
console.log(Math.round(4.6)); //roundoff
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(1, 4, 2, 3, 4, 0));
console.log(Math.max(1, 4, 2, 3, 4, 0));

console.log(Math.random());
console.log(Math.floor((Math.random() * 10) + 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


