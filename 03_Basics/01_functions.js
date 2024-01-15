

function sayMyName() {
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumber(2,5)
// addTwoNumber(2,"5")
// addTwoNumber(2,"a")
// addTwoNumber("b","a")
// console.log("Result:",result);



// function addTwoNumber(number1,number2){
//     let result1 = number1 + number2
//     return result1
//     // console.log("hello");
// } 
// const result1 = addTwoNumber(3,5)
// console.log("Result:",result1);


function addTwoNumber(number1,number2){
    // let result1 = number1 + number2
    return number1 + number2
    // console.log("hello");
} 
const result1 = addTwoNumber(3,5)
// console.log("Result:",result1);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return

    }
    return`${username} just logged in`
}

console.log(loginUserMessage("Hello"))

