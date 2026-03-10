// const app = new Object(); singleton object
const app = {}; // non singleton object 

app.id = "123";
app.name = "My App";
app.isLoggedIn = false;

// console.log(app);

const regularuser = {
    email:"user@example.com",
    fullname:{
        userfullname: {
            firstname: "sharanyaa",
            lastname: "G"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2}; 

// const obj3=Object.assign({},obj1, obj2, obj4); // it will merge the two objects and return the first object

const obj3 = {...obj1, ...obj2, ...obj4}; // it will merge the two objects and return a new object
// console.log(obj3);


const users = [
    {
        id: 1,
        name: "Sharanyaa",
        email: "h@gmail.com"
    },
    {
        id: 1,
        name: "Sharanyaa",
        email: "h@gmail.com"
    },

    {
        id: 1,
        name: "Sharanyaa",
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(app);

// console.log(Object.keys(app));
// console.log(Object.values(app));
// console.log(Object.entries(app));
// console.log(app.hasOwnProperty('isLoggedIn'));



const course = {
    name: "JavaScript",
    price: 999,
    instructor: "Sharanyaa"
}

// course.instructor

const { instructor: int } = course;//destructuring assignment to extract the value of the instructor property and assign it to a new variable called int
console.log(int);


// api is a set of rules that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information. APIs are used to enable integration between different systems, allowing them to work together and share data seamlessly.

//JSON is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data in web applications between a server and a client as an alternative to XML. JSON is built on two structures: a collection of name/value pairs (often realized as an object) and an ordered list of values (often realized as an array).

//json formater ,, to understand api 