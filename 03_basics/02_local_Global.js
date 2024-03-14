
//global 

let a=79
const b= 89


if(true)
{
    //Local.   //curly brace is Scope

    let a= 5
    const b=7

    var c= 30  //avoid char as it fails in local and global
}


///mini hoisting


//function format1

console.log(addone(5))      //it works
function addone(num)
{
    return num+1
}



//function format2

// console.log(addtwo(5))      //it not works
const addtwo=function(num){
    return num+2;
}

