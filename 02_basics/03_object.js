// singleton
// object.create

//object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Govind",
    "full name": "Govind Bhagat",
    [mySym]: "mykey1",
    age: 20,
    location: "Madhubani",
    email: "haghsja@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}
// dot(.) method
console.log(jsUser.name);
//console.log(jsUser."full name"); --->not allowed

//square[] method
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(jsUser["age"]);
console.log(jsUser["location"]);
console.log(jsUser["email"]);
console.log(jsUser["lastLoginDays"]);
console.log(jsUser["isLoggedIn"]);


console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello mr");
}
//console.log(jsUser.greeting);
console.log(jsUser.greeting());


jsUser.greeting2 = function(){
    console.log(`hello mr,${this.name}`);
}
//console.log(jsUser.greeting2);
console.log(jsUser.greeting2());



