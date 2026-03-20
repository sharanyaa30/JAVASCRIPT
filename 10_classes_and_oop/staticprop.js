class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        this.logMe(`Username: ${this.username}`)
    }
    // static stops the acces of the property 
    static createId(){
        return `123`
    }
}


const sharanyaa = new User("sharanyaa")
// console.log(sharanyaa.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const iphone = new Teacher("iphone", "i@phone.com")
console.log( iphone.createId())
