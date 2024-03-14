
const user ={
    username: "Saurabh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my website`);  //// this : is used to for "current context" in same body

        console.log(this)
    }
}

// user.welcomeMessage()

// user.username= "Shreya"

// user.welcomeMessage()

//console.log(this)   //o/p:  {}  =>because there is no context

///**********/////

// function chai(){
//     const username= "surbhi"
//     // console.log(this.username)  //RETURNS UNDEFINE:  this : works for object not for function
// }

// chai()


/*************      ARROW FUNCTION          */

const arrowCoffee = ()=>{
    let username= "shreya"
    console.log(this.username)      //return Undefine
}

//arrowCoffee()

////2 types of writing arrow funtion

// const addTwo= (num1, num2) =>{
//     return num1+num2
// }

////Note: Curly {} wala arrow funtion must use return 

const addTwo= (num1, num2) => ( num1+ num2)         //no return require

console.log(addTwo(2,8))

//to return object
const retuobjbyarrow= () => ({name: "saurabh", age:20})

console.log(retuobjbyarrow())