
//Operation
let str1= "I work in"
let str2= "Google "
let salary= 500000

// console.log(str1+ str2+ salary) Not good way
//USE STRING INTERPOLATION `BACKTICKS`
console.log(`I WORK IN ${str2} with salary of ${salary}` )


// allocation and CharAt
let string1= "my name is Saurabh"

console.log(string1) //simple print

//charAt index
//index of 'char'
console.log(string1.charAt(1))
console.log(string1.indexOf('y'))

//otUpperCase toLowerCase

console.log(string1.toUpperCase())
console.log(string1.toLowerCase())

// string evaluation => "2+2" = 4
let a="2+2"
console.log(eval(a))

//string object to premitive counterpart
// const stringobj= new String("2 + 3")

// console.log( eval( stringobj.valueof() ) )


//find if character present or not
let fi= "Saurabh"
console.log(fi.includes('k'))

//Replace => replace , replaceAll
console.log(fi.replace('a','k'))
console.log(fi.replaceAll('a','k'))

//substring
console.log(fi.substring(0,4))

//slicing => can work for -ive indexing i.e also reversing possible
const slicy= fi.slice(-6,3);
console.log(slicy)

//trimming=> removes space from front and back
const trimmy= "   sa ura bh     "
console.log(trimmy)
console.log(trimmy.trim())

//string to array based on ur diivision => split method
//ex: sa-ur-ab-b
let splliting= "sa-ur-ab-b"

console.log(splliting.split('-'))