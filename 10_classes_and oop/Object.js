function multiply(num){
    return num * 5
}

multiply.power = 2 

console.log(multiply(5));
console.log(multiply.power);
console.log(multiply.prototype);

function createuser(username,score){
    this.username = username
    this.score = score

}

createuser.prototype.increment = function(){
    this.score++
}

createuser.prototype.printMe = function(){
    console.log(`Score id ${this.score}`);
}

const chai = new createuser("tea",250)
const tea = new createuser("chai",25)

chai.increment()
chai.printMe()
tea.increment()
tea.printMe()