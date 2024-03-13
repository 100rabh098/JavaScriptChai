
function saymyName(){
    console.log("S")
    console.log("a")
    console.log("u")
    console.log("r")
    console.log("a")
    console.log("b")
    console.log("h")
}

// saymyName := reference
// saymyName() := executefuntion

//saymyName();

// function addTwoNumbers(number1, number2){       // parameters : insited (_parameter)
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){       // parameters : insited (_parameter)
    console.log(number1+number2);
    return number1+number2
}

const result= addTwoNumbers(3,5)    // value not saved in result as it is void function



console.log("value of result is", result);     

////.   FUNTION WITH OBJECTS AND ARRAY

//rest

function calculateCartPrice(...num){            // ... is rest used for multiple
    return num
}

//console.log( calculateCartPrice(100,500,1000,9000))

//object
const user={
    name: "manjeete",
    price: 1500
}

function handleObject( obj){

    console.log( `my name is ${obj.name} and had price of ${obj.price}`)
}

handleObject(user);