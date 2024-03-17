// const user = {
//     username: "Govind",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//        // console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "Rishu"
// user.welcomeMessage()

//console.log(this);   // different in browser and node


// function fun(){
//    // console.log(this);
//     console.log(this.username);
// }
// fun()


// arrow function
// const web = () => {
//     username = "Govind"
//     console.log(this);
//     console.log(this.username);
// }
// web()


// const addTwoNumber = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwoNumber(7,9))

// const addTwoNumber = (num1, num2) => num1 + num2 // implicit return
// console.log(addTwoNumber(6,8));


// const addTwoNumber = (num1, num2) => (num1 + num2) // implicit return
// console.log(addTwoNumber(6,8));


// const user1 = () => { username: "Govind"}
// console.log(user1());


// const user2 = () => ({ username: "Govind"})
// console.log(user2());