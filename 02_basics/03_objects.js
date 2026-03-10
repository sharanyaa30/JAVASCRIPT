// singleton object only one object of that type can exist


//object literals 
//Object.create() method creates a new object, using an existing object as the prototype of the newly created object. constructor method 

const mySym = Symbol("key1");

const JsUser = {
    name:"Sharanyaa",
    "full name": "Sharanyaa G",
    [mySym]: "mykey1", 
    age: 22,
    location: "Bangalore",
    email: "sharanyaa@example.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Tuesday", "Wednesday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "sharanyaag30@gmail.com";
// Object.freeze(JsUser) // it will not allow to change the object properties

JsUser.email = "sharanyaag@gmail.com";

console.log(JsUser);



JsUser.greeting = function() {
    console.log("Hello, welcome to JavaScript!");
}

console.log(JsUser.greeting());

JsUser.greeting2 = function() {
    console.log(`Hello, welcome to JavaScript!, ${this.name}`);
}

console.log(JsUser.greeting2());