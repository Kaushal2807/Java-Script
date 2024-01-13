const name = "Hello"
const repoCount = 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('World')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-1,4)
console.log(anotherString);

const newStringOne = "        world       "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://www.google.com"
console.log(url.replace('.com','.in'));

console.log(url.includes('google'));
console.log(url.includes('world'));
console.log(url.split('.'));
