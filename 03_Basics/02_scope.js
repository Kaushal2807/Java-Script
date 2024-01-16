
// var c = 300
//scope ==> {}
let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // var d = 50
    console.log("Inner:",a);

}

console.log(a);  //let and const cannot print but var is print 
// console.log(b);
console.log(c);
// console.log(d);


// Nested Scope

function one(){
    const username = "hello"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if (true){
    const username="hello"
    if(username === "hello"){
        const website = " youtube"
        console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num+1
}

console.log(addone(5));



const addTwo = function(num){
    return num + 2
}

console.log(addTwo (5));
