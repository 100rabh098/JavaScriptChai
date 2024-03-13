
//string to int

let score="33a"

let valueInNumber= Number(score)

//console.log(valueInNumber)

//"33"=> 33
//"33a"=> NaN
//true=> 1 
// if conversion sucees : string to NaN (not a number)
// if score==null  converts to 0


//To Boolean

let isloggedin="dfs"

let afterco= Boolean(isloggedin)

// console.log(afterco)

//"" => false
//"nonempty" =>true

/*********************  Comparison   */

//basic same datatype comparison

// console.log(2>1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

//different datatype

//console.log("2">1) //type conversion occours


//null comparison
//console.log(null==2) //

// ===   strictly match of datatype as well
//console.log("2"===2)