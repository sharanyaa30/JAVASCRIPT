const user = {
    username: "sharanyaa",
    loginCount: 8,
    signedIn: true, 

    getuserdetails: function(){
        //console.log("got user details fro datbase");
        //console.log(`username:${this.username}`);
        console.log(this);
        
        
    }
}


//console.log(user.username);
//console.log(user.getuserdetails());
//console.log(this);
// new keyword is a consturctor function from one key multiple keys are formed 
  

function User(username, logincount, isloggedin){
    this.username = username
    this.loginCount = logincount
    this.isloggedin = isloggedin

    this.greetinf = function(){
        //console.log(`welcome ${this.username}`);
        
    }

    return this 
}


const user1 = new User("sharanyaa", 12, true )

const user2 = new User ("shara", 11, false)
console.log(user1.constructor);
//console.log(user2);


// instenseof - we can chcek the instense 

