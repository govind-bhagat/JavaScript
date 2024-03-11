// convert ...... to number
let score = "234"
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

let score2 = "234ab"
console.log(typeof score2);
let valueInNumber2 = Number(score2);
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);

let score3 = null
console.log(typeof score3);
let valueInNumber3 = Number(score3);
console.log(typeof(valueInNumber3));
console.log(valueInNumber3);

let score4 = undefined
console.log(typeof score4);
let valueInNumber4 = Number(score4);
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);

let score5 = true
console.log(typeof score5);
let valueInNumber5 = Number(score5);
console.log(typeof(valueInNumber5));
console.log(valueInNumber5);

// "234"or"Govind" => 234
// "234ab" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

//convert .... to boolean
let isLogedIn = 1
let isLogedInInBoolean = Boolean(isLogedIn)
console.log(isLogedInInBoolean);

let isLogedIn2 = "GOVIND"
let isLogedInInBoolean2 = Boolean(isLogedIn2)
console.log(isLogedInInBoolean2);

let isLogedIn3 = ""
let isLogedInInBoolean3 = Boolean(isLogedIn3)
console.log(isLogedInInBoolean3);

let isLogedIn4 = 0
let isLogedInInBoolean4 = Boolean(isLogedIn4)
console.log(isLogedInInBoolean4);

let isLogedIn5 = 453
let isLogedInInBoolean5 = Boolean(isLogedIn5)
console.log(isLogedInInBoolean5);

let isLogedIn6 = null
let isLogedInInBoolean6 = Boolean(isLogedIn6)
console.log(isLogedInInBoolean6);

let isLogedIn7 = undefined
let isLogedInInBoolean7 = Boolean(isLogedIn7)
console.log(isLogedInInBoolean7);

// 0 => false
// "" =>false
// null => false
// undefined =>false
// 1 => true
// 345 => true
// "Govind" =>true


//number to string
let someNumber = 345
let inString = String(someNumber)
console.log(typeof inString);
console.log(someNumber);