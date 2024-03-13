//singletons => fron constructor

//js literals 

const mysym= Symbol("key1")

const jsuser= {
    name: "saurabh",           // default key=> "name"
    "full name" :"saurabh Singh",
    [mysym]: "key2" ,
    age: 19,
    location: "kanpur",
    email:  "dashingsaurabh@gmail.com",
    job: false,
    lastlogin: ["monday","tuesday"],
}

console.log(jsuser)

//preoperty access
console.log(jsuser.name)    //avoid  : can't access :full name
console.log(jsuser["full name"])    //Good 

//symbol
//console.log(jsuser[mysym])

/////////////////

//CHANGE VALUES
jsuser.email= "manjeete@gmail.com"

//lock Values
// Object.freeze(jsuser);

jsuser.email="haddipa@yahooo"

console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello saurabh this side")
}

jsuser.greetingtwo = function(){
    console.log(`hello jsUser ,${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())
