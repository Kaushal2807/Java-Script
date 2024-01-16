const user = {
    username : "hello",
    price : 999,
    
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

// console.log(this);

//it works only in objects not in function

// function one(){
//     let name = "hello"
//     console.log(this.name);
// }
// one()


// const chai =function(){
//     let name = "hello"
//     console.log(this.name);
// }
// chai()

const chai =() => {
    let name = "hello"
    console.log(this);
}
chai()



// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(7,5));



// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(7,5));



// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(7,5));

const addTwo = (num1,num2) => ({name:"hello"})
console.log(addTwo(7,5));




