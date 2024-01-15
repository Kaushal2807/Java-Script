

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


// Rest opertor

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(50,100,200,400,500,2000));


function calculateCartPrice1(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice1(50,100,200,400,500,2000));


const user = {
    username:"hello",
    price:199
}

function handleObject(anyobject){
    console.log(`Username id ${anyobject.username} and price id ${anyobject.price}`);
}

handleObject(user)

handleObject({
    username : "sam",
    price:399
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,500,660,700]));