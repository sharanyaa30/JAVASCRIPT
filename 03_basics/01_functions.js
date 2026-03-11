function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("a");
    console.log("n");
    console.log("y");
    console.log("a");
    console.log("a");
}


// sayMyName(); // function call

// function addTwoNumbers(num1, num2){ // parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){ // parameters
//    let result = num1 + num2;
//    return result;

    return num1 + num2; // directly returning the result without storing in a variable  
}
const result =addTwoNumbers(3, 5); // function call with arguments

// console.log("result:", result);


function loginUserMessage(username = "Guest"){ // default parameter value
    if(!username){
        return "Please enter a username"
    }
    return `${username} just logged in`
}

console.log(loginUserMessage()); // function call with argument

// if values are not passed it will be undefined


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

// first item will considered as num1 and second item will be ignored because we have only one parameter in the function

//... rest operator will take all the values and store in an array and return the array

// if the values are named parameters then we can use object destructuring to get the values from the object the rest will be in spread operator

// const user = {
//     username: "Sharanyaa",
//     price: 500
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject({
    username: "Sharanyaa",
    price: 500
}
);

const myNewArray = [1, 2, 3, 4, 5];

function returnsecodvalue(getarray){
    return myNewArray[1];
}

// console.log(returnsecodvalue(myNewArray));

console.log(returnsecodvalue([1, 2, 3, 4, 5]));

