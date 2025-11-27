// Types of arrays -> continuous(packed) and holey array
// Three->SMI -small integer, Packed, Double(float,string,function) 

//** */ based on the type of element in array js optimise the array **

const arrTwo=[1,2,3,4,5] // packed SMI elements -> packed smi contains only integers
arrTwo.push(6.0) // now it become packed double
arrTwo.push('ok') // packed 

// if we delete double then it will not go into it's earlier type

arrTwo[10]=11 // now it become holey elements 
console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9]) 

//for holey arr
//bound check
// hasOwnproperty( arrTwo,9)
// hasOwnproperty(arrTwo.prototype,10)
// hasOwnproperty(Object.prototype,10)  as js keep checking for further untill null

// holes are very expensive
// if continues then only bound check 

//Optimization : SMI->double->normal packed-> holey smi->holey double->holey packed

const arrFour=new Array(3)
//Holey smi as optimisation is done by compiler
arrFour[0]='0' // holey elements 
arrFour[1]='1' 
arrFour[2]='2'


// better way of optimization is 
const arrFive=[] // now it is packed not holey
// if NaN, oo is inserted then it will become double 

//for , for-of, forEach is preferred because browser has been updated it utmost 
