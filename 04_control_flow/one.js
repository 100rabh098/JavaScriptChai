
///if

// if(2==2){
//     console.log("yeeey")
// }


///
const isUserLoggedIn= true

if( 2== "2"){
    //console.log("executed");
}

///  < ,> , <= , >= ,!=  , === {checks type as well}

if(2=== "2"){
    console.log("executed")
}

//
const temperature= 41

// if(temperature<50 ){
//     console.log("less than 50");
// }
// else {
//     console.log("greater than 49");
// }


//short hand notation
const balance= 1000
// if( balance>500) console.log("Rich") 


/// && ||

const userLoggedin=true
const debitcar= false
const loginfromgoogle= true
const loginfromfacebook= false

if(userLoggedin && debitcar && 2==3){
    console.log("allow to buy course");
}

if(loginfromfacebook || loginfromgoogle)
{
    //console.log("User Logged In")
}


////SWITCH/////

const month=1


switch (month){
    case 1 : 
        console.log("January");
        break;         // break is important else will keep running all  except default case
    case 2 : 
        console.log("Feb");
        break;
    case 3 : 
        console.log("March");
        break;
    
    default:
        console.log("default case matched")
        break;
}