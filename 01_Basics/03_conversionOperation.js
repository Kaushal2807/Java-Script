let score = "33x"



console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));
console.log(valueInNumber);


// "33" ==> 33
// "33x" ==> NaN
// True ==> 1 
// False ==> 0

let isLoggedIn = 1

let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn);

//  1 ==> true
//  0 ==> false
// "Kaushal"==> true

let someNumber = 33
let string = String(someNumber)

console.log(typeof string);
console.log(string)

// ************************ Operations **************************************


let value = 3 
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3);

// Concatenation of String

let str1 = "Hello "
let str2 = "World"

let str3 = str1+str2
console.log(str3);

// Tricky Conversion

console.log("1"+ 2);
console.log(1 + "2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log((3+4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1);

let gameCounter = 100
gameCounter++;
// ++gameCounter;

console.log(gameCounter);
