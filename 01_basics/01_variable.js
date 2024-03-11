const accountId = 12345
let accountEmail = "govind@google.com"
var accountPassword = "76543"
accountCity = "madhubani"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountPassword])

/*
prefer not to use var 
because of issue in block scope
*/

//accountId = 34526  ----- accountId is a constant ---- no change allow
accountEmail = "bhagat@google.com"
accountPassword = "90876"
accountCity = "darbhanga"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountPassword])

var accountState

console.table([accountId,accountEmail,accountPassword,accountPassword,accountState])