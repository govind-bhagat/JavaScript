const myArray = [2,3,4,5,1]
const myHeros = ["bhagat singh","Boss","Ambedkar"]
console.log(myHeros[0]);

const myArray2 = new Array(1,2,3,4)
console.log(myArray2[0]);

//Array methods

//push
myArray.push(6)
console.log(myArray)
myArray.push(8)
console.log(myArray);

//pop
myArray.pop()
console.log(myArray);

//unshift
myArray.unshift(10)
console.log(myArray);

//shift
myArray.shift()
console.log(myArray);

//include
console.log(myArray.includes(12));

//indexof
console.log(myArray.indexOf(1));
console.log(myArray.indexOf(8));

//join()
const newArr = myArray.join()
console.log(newArr);
console.log(typeof newArr);

//slice
console.log("A",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray);

//splice
const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("B", myArray);