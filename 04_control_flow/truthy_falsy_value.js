

//falsy Values

// false, 0, -0 , BigInt 0n, "", null , undefined , Nan

//truthy values

// "0", "false" , true, 1, "something", [] , {} ,function() {} 


//if [] is true than how to check array is empty or not

let arr=[]

if(arr.length ===0)
{
    // console.log("emppty array");
}

//hw to check empty Object

let obj= {

}

if(Object.keys(obj).length===0){
    // console.log("empty object");
}


/// Nullish Colishing Operater  ??:

let var1

// var1= 5??10     //first value of those present will be assigned

// var1= null??551

// var1= undefined??120

// var1= null?? 1?? 2 ??3

// console.log(var1)


////Terniary Operater

// condition? true : false

const price= 500

price<250 ? console.log("less than 250") : console.log("more than 250")