class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
        this._email = val
    }

    get password(){
        return `${this._password}bed`
    }

    set password(value){

        this._password = value.toUpperCase()
    }
}

const bedant = new User("bedant@mail.io","abc")
console.log(bedant.email)