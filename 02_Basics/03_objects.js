//singleton

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name:"Hello",
    [mySym]:"key1",
    "fullname":"Hello world",
    age:19,
    location:"jaipur",
    email:"abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Tuesday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);

console.log(Jsuser["fullname"]);
console.log(Jsuser[mySym]);

Jsuser.email = "abc@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "cde@gmail.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());