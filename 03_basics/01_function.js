function sayName() {
    console.log('g');
    console.log('o');
    console.log('v');
    console.log('i');
    console.log('n');
    console.log('d');
}
//sayName()


// function addTwoNumbers(number1, number2) {   // number1 and number2 is a parameter
//     console.log(number1 + number2)
// }
// addTwoNumbers(5,null)         // 5 and null are arguments
// addTwoNumbers(5 , undefined)
// addTwoNumbers(5,4)
// addTwoNumbers(5,"4")
// addTwoNumbers(5,"q")

// const result = addTwoNumbers(5,4)
// console.log("Result: ",result);


// function addTwoNumbers(number1, number2) {   // number1 and number2 is a parameter
//     console.log("GOVIND")
//     // let result = number1 + number2
//     // return result;
//     return number1+number2;
//     console.log("BHAGAT");
// }
// const Result = addTwoNumbers(7,8)
// console.log(Result);
// console.log(addTwoNumbers(5,5));

// function loginUserMessage(username){
//     return `${(username)} just logeed in `
// }
// console.log(loginUserMessage("GOVIND"));
// console.log(loginUserMessage());

// function loginUserMessage(username){
//     if(username === undefined){                  // in jS  undefined and empty ""  is equal to false 
//         console.log("Please Enter a username");
//         return
//     }
//     return `${(username)} just logeed in `
    
// }
// console.log(loginUserMessage("GOVIND"));
// console.log(loginUserMessage());
// console.log(loginUserMessage(undefined));


function loginUserMessage(username = "Bhagat"){
    if(username === undefined){                 
        console.log("Please Enter a username");
        return
    }
    return `${(username)} just logeed in `
    
}
console.log(loginUserMessage("GOVIND"));
console.log(loginUserMessage());
console.log(loginUserMessage(undefined));