//******Primitive

//7 types: number,string,boolean,null,undefined,symbol,BigInt



//*******Reference(Non Premitive)

// array objects and functions

const heroes=["shaktiman","nagraj","doga"]

let myobj={
    name: "saurabh",
    age:20,
}

const myfunction= function(){
    console.log("hello world");
}

// return data type
/* premetive : 
12=> number
"12" =>string
true=> boolean
symbol=> symbol

non premetive
all return =>functions
funtions=> object function
*/

/**********************. MEMORY USAGE *********/

//Premitive datatypes( Stack)
//Non premitive datatypes( Heap)

let myex=" kanchan"
let next= myex

next= "sundari"

// here value in "myex" will not be updated as stack

let userone ={
    email: "dashingsaurabh",
    upi: "763payme@",

}

let usertwo= userone;

usertwo.email="manjeetseing@gmail.com"

//Now here original data will be updated

