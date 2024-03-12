// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2473822n;



// Refrence (Non primitive)
//---->>>>>

// array
const heros = ["Bhagat Singh","B R Ambedkar","Boss"];

//Object
{
   name: "Govind"
   age: 22
}
//OR
let myObj = {
    name: "Govind",
    age: 22,
 }

 //Function
 const myFun = function(){
  console.log("Hello World");
 }

// type check
 console.log(typeof score);
 console.log(typeof scoreValue);
 console.log(typeof isLoggedIn);
 console.log(typeof outsideTemp);
 console.log(userEmail);
 console.log(typeof anotherId);
 console.log(typeof id);
 console.log(typeof bigNumber);
 console.log(typeof heros);
 console.log(typeof myObj);
 console.log(typeof myFun);