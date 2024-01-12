const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// const cannot change
// accountId = 2 not allowed
// Why var is not ?? Prefer of issue in block scope and functional scope 

accountEmail = "def@gmail.com"
accountPassword = "565656"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])