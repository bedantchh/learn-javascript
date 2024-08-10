class User{
    constructor(username){
        this.username = username
    }


    logMe(){
        console.log(`USERNAME is : ${this.username}`)
    }

    static createId(){
        console.log(`123`)
    }
}

const Bedant = new User("Bed")

// Bedant.createId() this is not accessible because of static

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const ant = new Teacher("ant","ant@gmail.com")
//ant.createId()   this is not accessible because of static