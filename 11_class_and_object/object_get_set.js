const User = {
    _email: 'shajh@gmail.com',
    _pssword: "abc",


    get email(){
          return this._email.toUpperCase()
    },

    set email(value){
         this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);