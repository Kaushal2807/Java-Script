// const tinderUser = new Object() // Singleton Object


const tinderUser1 = {}  // Non singleton object

tinderUser1.id = "123abc"
tinderUser1.name="hello"
tinderUser1.isLoggedIn = false

console.log(tinderUser1);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Hello",
            lastname: "World"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2,obj4)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id : 1,
        email:"a@gmail.com"
    },
    {
        id : 2,
        email : "b@gmail.com"
    },
    {
        id : 3,
        email : "c@gmail.com"
    },
    {
        id : 4,
        email : "ad@gmail.com"
    },
]

console.log(users[0].email);
console.log(users);
console.log(tinderUser1);
console.log(Object.keys(tinderUser1));
console.log(Object.entries(tinderUser1));

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));
