// if

if (true) {

}

const isUserloggedIn = true
const temperature = 41

if (temperature < 50) {
    console.log("Less than 50");
}
else {
    console.log("Temperature is greater than 50")
}



if (3 != 2) {
    console.log("Exected");
}
if (3 === 2) {
    console.log("Exected");
}

// <, >, <=, >=, ==, !=, 

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);


const balance = 1000
if (balance > 500) console.log("test"),
    console.log("test2");

// Nesting if - else

if (balance < 500) {
    console.log("Less than 500");
}

else if (balance < 750) {
    console.log("Less than 750");
}

else if (balance < 900) {
    console.log("Less than 900");
}
else {
    console.log("Less than 1200");
}

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
