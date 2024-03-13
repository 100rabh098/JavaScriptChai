
//arrays

const arr= [1, 5,9, "saurabh"]

const myarr2= new Array(1,2,3,4)

//index access
console.log( arr[2])

//Array Methods

arr.push("Bihar") // push element
console.log(arr)

arr.pop()       //pop
console.log(arr)

//unshift => added element in front
arr.unshift(99)
console.log(arr)

//shift  => shifts first index and remove first element
arr.shift()
console.log(arr)

//Ask Questions to array

console.log(arr.includes("saurabh"))  //Returns=> Bool

console.log(arr.indexOf("saurabh"))  //Returns=> index  : if not exist return -1

//Join

const newstr= arr.join()        //Comines all elements to string
console.log(newstr);

//Slice & Splice

let check= [1,2,3,4,5,6]
console.log("A", check)

//slice
console.log(check.slice(1,3))       //not include 3rd index
console.log(check)

//splice
console.log(check.splice(1,3))      //include 3rd index and also chop original array
console.log(check)

