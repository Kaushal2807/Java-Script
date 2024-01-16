// Immediately Invoked Function Expression (IIFE)

// function one(){
//     console.log('DB connected');
// }
// one()



// IIFE

(function one(){
    // Name IIFE
    console.log(`DB connected`);
})();



(()=> {
    console.log(`DB connected two`);
})();



((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})(`hello`)

