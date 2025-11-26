// The Promise object represents the eventual completion 
// (or failure) of an asynchronous operation and its resulting value.
//like sending request from database, 
// three states-pending , fullfilled, rejected
//promise is an object

//befor es6 direct promises are not available-> for that Q and bluebird libraries are available

// Creation of promise
const promiseOne= new Promise(function(resolve,reject){
    //Do and async task
    // e.g DB calls,crypography , network calls , 
    setTimeout(function(){
        console.log('async task is complete');
        resolve(); // now it is connected with then
    },2000)
}) // promise takes callback function which contain resolve and reject


//consumption of promes
promiseOne.then( function(){
    console.log("Promise resolved")
}) // then is connected with resolve 
// after promise is resolved then only promise consume


//other ways 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("promise 2 resolved")
})


// object in resolve 
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"a@gmail.com"})

    },1000)
})

promiseThree.then(function(user){
    console.log(user)

})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"rahul",password:"1243"})
        }
        else{
            reject("We didn't get info from database")
        }
    },1000)
})
// promiseFour.then().catch() // then for resolve and catch for error
const uername=promiseFour
.then((user)=>{
    return user.username
}).then((myusername)=>{
    console.log(myusername)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
}) // chaining ->chaining is important 
// finally() will execute either it is resolved or rejcted ( i.e. it is bydefault ) . 


const promiseFive=new Promise((resolve,reject)=>{
     setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Javascript",password:"1243"})
        }
        else{
            reject(" JS didn't get info from database")
        }
    },1000)
});

// other syntax is async await (it is like then and catch) usually for DB
async function consumePromiseFive(){
    try{
    const response=await promiseFive // promise is an object
    console.log(response);
    }
    catch(error){
        console.log(error)
    }
};
// async await can't handle rejection so we need try and catch 

consumePromiseFive()


// behind the scenes 
// fetch returns the Promise
async function getAllUsers(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json() ;// converting into json , response.json will also takes time so we should await it also
   
        console.log(data)
    }
    catch(error){
        console.log(error)
    }

}
// we didn't get data from here if we dont use await with response.json()
getAllUsers()

// using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
