## Execution context

- JS works in execution context 
- Memory component(key and value pair)(variable environment)
- code component(code executed one line at a time)(thread of execution, code executed one line at a time, in specific order)

## Java script

- js is synchronous single threaded language 
<<<<<<< HEAD
- 
=======
- Global execution context -- memory creation phase -- code execution phase
- creation phase- allocate memory - in beginning its always undefined
- code execution - function is invoked and an execution context is again formed in the function -- once function completed it willbe deleted (pop works)
- once whole code is deleted the complete global execution code will be deleted
- call stack GEC is pushed from last one by one maintains the order
>>>>>>> fbfb7a3 (closures let const scope functions hiosting)


- this keyword points to and also is equal window object (global object) 
- global space anything not inside a function 
- loosly typed language (flexible)

## Hoisting 
 - function called can be executed before the function is written but variable will not be executed before assigning
- undefined - This is a value in JavaScript.and notdefined - This is an error, not a value. The variable was never declared at all
- eg: getname()- executed getname- the whole function is displayed
- in arrow function it acts as a variable 

## functions
- variable inside function is independent it is seperate 

## scope
- access of variable or a function 
- lexical environment - is a local memory along with lexical parent reference to lexical environment of its parent
- lexical is hirarchy
- scope chain 

## let and const

- declarationns are hoisted (temporal dead zone for time being)
- temporal dead zone time between initializztion and the beginning 
- var will be attached to window object .. let will not be let variables cannot be accessed with this 
- no redeclaration of let in var we can 
- const is strict thn let .. we cannot initialize later .. (missing initalization) 

- syntax - type - reference error 

- const - let - var 

- Block defined by {}, compound statement combine into to a grp multiple statements where js expects one statement - block scope varibales and function actioned in a scope
- let and const in block scope. cannot be accessed outside the block  
- var in global scope 
- shadowing same name variable outside the block inside the block variable shawdow the outsie variable modifies the value fo var 
- for let both values will be displayed for const also shadowing works for both 
- illeigal shadowing cannot shadow var using let visa versa works
- each blocks hv its own lexical scope  


## closure

- a function bind together with its lexical environment 
- used in : Module design pattern, curring, function like once, memoize, maintaining state in async world, setTimeouts, Iterators, ...



## Applications 

- in set timeout - waits until the other function or log is completed and works with settime out 
- print 1 to 5 use let in for loop - let allocates new copy 
- let is block scope 
- using var to print create closure using function call the i function for the number of time
- closure is a combination of function and lexical scope forms a closure (function along with its outer environment), access to its outer lexical environment.  
- outer()() => var close = outer();
                close()
- advantages - it is used in module pattern , function curing ,memoize ,data hiding and encapsulation (other functions does not use it(variable) )
- constructor function (this.) and also use new keyword
- disadvantages - conusumes lot of memory no garbage collection (freeze unutilized memory)
- smart garbage collection system- variable not in use will be removed 

## first class functions anonymous function (function statement, function Expression, function declaration )
- function statement - function keyword and name of the function - it is also function declaration 
- function expression - giving value to the function 
- diffrence between function statement and expression hoisting 
- anonymous function - without a name - no identity - used where functions are used as values 
- named function expression - giving variable to function also giving a name to the function also - but cannot call with name of the function outside the function 
- difference between parameter and argument - variable inside parameter of the function name(parameter) - value while calling the function called arguments 
- first class functions - the ability to use function as a value and can be passed as a argument to another function and also can be returned as a function.
- functions are first class citizens 
- arrow functions 

## callback
- callback function - function passed into another function - using callback we can async
- garbage collection and remove event listeners - extra memory cannot be freed up and event listeners feel heavy so we remove 

## Asynchronous and event loop 
- web apis - settimeout(), DOM apis, fetch(), local storage, console, location 
- event loop checks the call back queue and puts it into the stack
- addeventlistener - (document calls the DOM api ) registers event 
- event loop - monitor call stack and call back queue 
- fetch() - to make network calls - after fetched call back function will be executed 
- micro task queue - high priority for call back function
- event loop keeps checking whether the call stack is empty 
- micro task queue call back function which comes through promises will go inside call back queue - mutation observer - allows to monitor changes in DOM
- event loop makes all the microtask queue to be executed and thn executes the call back queue
- stravation - starvation refers to a situation where a task is perpetually delayed and never gets a chance to execute because the event loop is always busy handling other tasks — usually higher-priority or more frequently scheduled ones.- This is a concurrency scheduling problem that can happen even though JavaScript is single-threaded, because it relies on the event loop and task queues.


## JS engine 
- 





