// if (condition) {
    //code
// }   

// condition is true then code execute if condition is false then not code execute

const isUserLoggedIn = true
if(isUserLoggedIn){
    //console.log("Logged In");
}



// if (condition) {
    //code1
// } else {
    //code2
// }

//condition true-> code1 execute
//condition false-> code2 execute

const temp = 200
if (temp>200) {
    //console.log(`temp is greater than 200`);
} else {
    //console.log(`temp is less than or equal to 200`);

}

// //not good method
// const balance = 1000
// if (balance >500) console.log("test1"),console.log("test2");


const balance = 1000
if (balance>1000) {
    //console.log("balance is greater than 1000");
} else if(balance == 1000) {
    // console.log("balance is equal to 1000");
}else{
    // console.log("balance is less than 1000");
}

