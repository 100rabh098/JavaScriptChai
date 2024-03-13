
// const tinderUser= new Object()      //SINGLETON OBJECT 

const tinderUser= {}        //non singleton

tinderUser.id= "12ab"
tinderUser.name= "Sultan"
tinderUser.isloggedin= false

// console.log(tinderUser)

//object k andar object

const regularUser={
    email:'dashingsaurabh',

    fullname: {
        firstname:"saurabh",
        lastname:" singh",
    },
}

console.log(regularUser.fullname.firstname);

//concatinatin OBJECTS := assign

const obj1= {1:"a", 2:"b", 3:"c"}
const obj2= {4:"a", 5:"b", 6:"c"}
const obj3= {7:"a", 8:"b", 9:"c"}

//asign
const resObj= Object.assign({}, obj1,obj2,obj3)     //Here {}=> is object where all other objects are assigned

//console.log(resObj)

//spread => BETTER
const resspread=  {...obj1,...obj2,...obj3}

//console.log(resspread)


/////////more

//console.log(tinderUser)

//keys
//console.log(Object.keys(tinderUser))      //=> gives array of keys

//console.log(Object.values(tinderUser))      //=> gives array of values

//question

console.log(tinderUser.hasOwnProperty('isloggedin'))



/************ */

const course={
    coursename: 'js in hindi',
    courseprice:999,
    course_instructor:"hitesh choudhary"
}

//destructure : kisiko baar baar na likhna pade
//ex: 

console.log(course.course_instructor)   // baar baar likhne m messy hogs "koi chota naam kaise den"

const {course_instructor: instructor} = course

console.log(instructor)


//**       API          */
