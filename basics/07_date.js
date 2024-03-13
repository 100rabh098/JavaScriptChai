//dates

let myDate= new Date();

console.log(myDate); // object type return

console.log(myDate.toString()); // 
console.log(myDate.toDateString()); // gives : day month date year

console.log(myDate.toLocaleString()); // gives :  month date year and time

//typeOf (myDate) => Object


/*****  own date   */
let mycreatedDate= new Date(2023, 0,25, 5,3)

console.log(mycreatedDate.toLocaleString())


// My TimeStamp

let myTimeStamp= Date.now();

console.log(myTimeStamp); // time in milisecond with respect to 1993wali date

console.log(mycreatedDate.getTime());  // wrt 1993 wali time

//seconds
console.log(Math.floor(  myTimeStamp/1000 ) )

//***** more methods    *****/

let newDate= new Date();

console.log(newDate.getDate())