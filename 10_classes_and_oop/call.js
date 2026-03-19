function setusername (username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}


function createuser(username, email, password){
    setusername.call(this, username)

    this.email = email 
    this.password = password 
}

const chai = new createuser("chai", "chai@f.com", 123)
console.log(chai);
