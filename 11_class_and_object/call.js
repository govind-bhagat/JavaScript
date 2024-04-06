function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function CreateUser(username, email, password){
    SetUsername.call(this,username)
    
    this.email = email
    this.password = password
}

const hello = new CreateUser("hello", "@has", "123")

console.log(hello);