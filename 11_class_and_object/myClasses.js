// ES 2006

class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryPassword() {
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const govind  = new user("jsgd", "@kus", "123e")

console.log(govind.encryPassword());
console.log(govind.changeUsername());

