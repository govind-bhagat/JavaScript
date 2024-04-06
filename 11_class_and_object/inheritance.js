class user {
    constructor(username) {
        this.username = username
    }
    LogMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email) {
        super(username)
        this.email = email
    }

    addCource(){
        console.log(`new cource was added by ${this.username}`);
    }
}

const hello = new Teacher('hello','hello2gmail.com')

// hello.addCource()
// hello.LogMe()
// console.log(hello.username);

const helloMe = new user("hello Gee")
// helloMe.addCource()
//helloMe.LogMe()


console.log(hello === helloMe);
console.log(hello === user);
console.log(hello === Teacher);
console.log(hello instanceof user);
console.log(hello instanceof Teacher);
console.log(helloMe === user);
console.log(helloMe === Teacher);
console.log(helloMe instanceof user);
console.log(helloMe instanceof Teacher);

