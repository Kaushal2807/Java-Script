// Primitive
/* 7 types :String, Number, Boolean, null(empty), undefined(value is not defined),symbol,BigInt */


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

console.table([score, scoreValue, isLoggedIn, outsideTemp, userEmail]);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const bigNumber = 3465789128855552123n
console.log(typeof bigNumber);
// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ['shaktiman', 'naagraj', 'doga']
let myobj = {
    name: "hello",
    age: 2,
}

const myFunction = function () {
    console.log("Hello World ");
}
console.log(typeof myFunction);
console.log(typeof id);
