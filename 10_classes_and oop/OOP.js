const user ={
    username:"Hello",
    loginCount : 8,
    signIn: true,


    getUserDetails: function(){
        // console.log("Got user details from the database");
        // console.log(`Username is ${this.username}`);
        console.log(this);
    }

}

console.log(user);
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("hello", 12,true)
const userTwo = new User("chai", 12, false)
console.log(userOne.constructor);
console.log(userTwo);