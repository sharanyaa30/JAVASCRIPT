
//fetch('https://somthing.com').then().catch().finally()

const promise1 = new Promise(function(resolve, reject){

    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promise1.then(function(){
    console.log("promise consumed")
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");

    
})
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "sharanyaa", email: " sharnyaag30@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout( function(){
        let error = true
        if (!error){
            resolve({username:"sharanyaa", password: "123"})
        }else{
            reject('Error: somethig went wrong')
        }
    }, 1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("promise resolve or rejected"))



const promise5 = new Promise(function(resolve, reject){
    setTimeout( function(){
        let error = true
        if (!error){
            resolve({username:"javascript", password: "123"})
        }else{
            reject('Error: js went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
            const response = await promise5
    console.log(response);
    }catch (error){
        console.log(error);
        
    }
    
}

consumePromiseFive()


// async function getAllusers() {
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//     console.log(data);
//     }catch(error){
//         console.log("E:",error);
        
//     }
    
// }


// getAllusers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error))
