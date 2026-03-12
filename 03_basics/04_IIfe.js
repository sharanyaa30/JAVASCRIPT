// Immediately Invoked Function Expression (IIFE)

// IIFE is a JavaScript function that runs as soon as it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping.

// The primary reason to use an IIFE is to obtain data privacy. Because JavaScript's var scopes variables to their containing function, any variables declared within the IIFE cannot be accessed by the outside world. This allows you to create private variables and functions that cannot be accessed from outside the IIFE.

// due to global scope pollution, we can use IIFE to avoid polluting the global scope. By wrapping our code in an IIFE, we can create a new scope for our variables and functions, which helps to prevent conflicts with other code that may be running on the same page.


(function one(){

    //named iife
    console.log("This is an IIFE function");
    
})();

// (function)(execution)


((name) =>{
    console.log(`   Hello ${name}, this is an IIFE function`);
    
})("sharanyaa");