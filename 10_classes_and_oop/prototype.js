// let myname = "sharanyaa      "
// let mychannel = "chai      "

// console.log(myname.truelength());



let myheros = ["thor", "spiderman"]


let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.sharanyaa = function(){
    console.log(`sharanyaa is present in all ojects`);
    
}

Array.prototype.heysharanyaa = function(){
    console.log(`sharanyaa says hello`);
    
}

// heropower.sharanyaa()

myheros.sharanyaa()
myheros.heysharanyaa()
// heropower.heysharanyaa()

// inheritance


const User = {
    name:"chai",
    email: "chai@google.com"
}


const Teacher = {
    makevideo: true
}


const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherusername ="chaiaurcode         "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
    
}


anotherusername.truelength()
"sharanyaa".truelength()
"iceTea".truelength()