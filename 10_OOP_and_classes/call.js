function SetUserName(username){
    this.username = username
}

function CreateUser(username, email, pw){
    SetUserName.call(this, username)

    this.email = email
    this.pw = pw
}

const chai = new CreateUser("bedant","bedant@g.com", "5050")

console.log(chai)
