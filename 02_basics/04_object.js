// singleton
//const tinderUser = new Object()

// non singleton
const tinderUser = {}
tinderUser.id = "34he"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "hdgq@gmail.com",
    fullName: {
    firstName: "Govind",
    lastName: "Bhagat"
    }
}

// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.firstName);
// console.log(regularUser.fullName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

// array of object
const users = [
    {
        id: 1,
        email: "hjh@gmail.com"
    },
    {
        id: 3,
        email: "dgjh@gmail.com"
    },
    {
        id: 2,
        email: "urhjr@gmail.com"
    }
]
//console.log(users[1].email)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));