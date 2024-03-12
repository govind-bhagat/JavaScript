// 1.Stack (primitive)  

let myName = "Govind"
let myName1 = myName
myName1 = "govind"
console.log(myName);
console.log(myName1);

//2. Heap(Non-primitive)

let user1 = {
    email: "jsdhaj@gmail.com",
    upi: "jdsji@ybl"
}
let user2 = user1;
user2.email = "t3h@gmail.com"

console.log(user1.email);
console.log(user2.email);