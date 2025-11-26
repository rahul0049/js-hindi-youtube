// JS is protoypal behavior-> it will search ultill it gets NULL
// new, this ,class all are due to prototypal behavior
// const=['',''] // contains prototype inside that also a prototype 

//object
const multiplyBy5=function(num){
    return num*5;
}
multiplyBy5.power=2
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

//       SO EVERYTHING IS OBJECT IN JS

function user(username,score){
    this.username=username
    this.score=score
}
// creating our own prototype function
user.prototype.increament=function(){
    this.score++; // this is for context 
}
user.prototype.printMe=function(){ //there is no need to write prototype , js will automatically search inside prototype
    console.log(`Printing score : ${this.score}`)
}

const chai= new user('chai',10) // without new printMe is not recognized 
const tea= new user('tea',15)


chai.increament()

/* Here is what happen with new keyword 
1. A new object is created :-The new keyword initiates the creation of new javascript object

2. A prototype is linked :- The newly created object is linked to the prototype property of the 
constructor function . This means it has access to to properties and methods defined on the 
constructor's prototype 

3. Constructor is called 

4. The new object is returned
*/

