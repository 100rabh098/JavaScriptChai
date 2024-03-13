
const marvel_heroes= ["ironman","spiderman","BlackPanther"]

const DC_heroes= ["Batman","Flash","SuperMan"]

//concat : merges two array
const allheroes=marvel_heroes.concat(DC_heroes) 
// console.log(allheroes)

//spread : spread all elements

const allnewheroes= [...DC_heroes,...marvel_heroes]
console.log(allnewheroes)

// flat := array k andar array : sabhi elements ek array m aa jyenge

const testarray=[1, 2, [3,4,5],[6,[7,8]]]
const anotherflat= testarray.flat(Infinity)

console.log(anotherflat)  // op: [1,2,3,4,5,6,7,8]

//Questions
//isArray , from , of
console.log(Array.isArray("Saurabh")) //false
// from 
console.log(Array.from("Saurabh"))
console.log(Array.from({name: "saurabh"}))  //intresting as return empty array bcz we have to tell kiske basis p banao

//of
const a= 100
const b= 200
const c=300

console.log(Array.of(a,b,c))