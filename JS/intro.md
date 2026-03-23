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
- 
