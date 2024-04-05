function myfun(num) {
    return num * num;
}

myfun.x = 2      

// console.log(myfun(4));
// console.log(myfun.x);         // prototypical inheritance   function -> object
// console.log(myfun.prototype);

function creatFun(name,price) {
    this.name = name
    this.price = price
}

creatFun.prototype.increment = function(){
  this.score++;
}

creatFun.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
  }

const chai = new creatFun("tea", 23)
const tea = new creatFun("chai", 45)

chai.printMe()