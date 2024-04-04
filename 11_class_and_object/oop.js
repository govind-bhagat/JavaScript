const user = {
    username: "Govind@gsh",
    loginCount: 9,
    signIn: true,
    
    getUserDetails: function() {
    //    console.log(`username: ${username}`);
   // console.log(`username: ${this.username}`); 
    
    console.log(this);
    }
}
//console.log(user.username);

//console.log(user.getUserDetails());
//console.log(this);


function User(username, loginCount, signIn){
    this.username = username
    this.loginCount = loginCount
    this.signIn = signIn


    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }

   // return this
}

// const user1 = User("kumar", 12, false)
// const user2 = User("Kumar",15, true)
// console.log(user1);
// console.log(user2)

const user1 = new User("kumar", 12, false)
const user2 = new User("Kumar",15, true)
// console.log(user1);
// console.log(user2);
console.log(user1.constructor);