// const userEmail = "Bhagat@gmail.com"
// if (userEmail) {
//     console.log("Got user email");

// }
// else{
//     console.log("Don't have user email");
// }


// note

// falsy values
// false, 0, -0, BigInt, 0n, "", null, undefine, NaN


// truthy false
// "0", 'false', " ", [], {}, function(){} and nonFalsy_value

// Nullish Coalescing Operator (??): -->>null undefined
// let val1;
// val1 = 5 ?? 10
// console.log(val1);
// val1 = null ?? 10
// console.log(val1);
// val1 = undefined ?? 10
// console.log(val1);
// val1 = 5 ?? null
// console.log(val1);
// val1 = 5 ?? undefined
// console.log(val1);

// val1 = null ?? 10 ?? 5
// console.log(val1);


//ternary opeartor 
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice  >= 80 ? console.log("more than 80 or equal to 80") : console.log("less than 80");