class user {
    constructor(username){
        this.username = username
    }
    LogMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return Math.random()
    }
}

//createId() not accessable

const GOvind = new user("Govind")
//console.log(GOvind.createId());

class Teacher extends user {
    constructor(username, email) {
        super(username)
        this.email = email
    }

    
}

const Kumar = new Teacher("kumar","a2gmail.com")
Kumar.createId()