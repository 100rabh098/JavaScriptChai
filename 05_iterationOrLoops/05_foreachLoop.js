//most used

//for each loop

const coding=["js","ruby","cpp","java","python","c"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

//variration 2

//arrow funcgion

//coding.forEach( (k)=> {console.log(k)})

//variation3

function printme(a){
    console.log(a)
}

//coding.forEach( printme )       ///IMPO: here only funciton reference is shared


// objects traversal

const myCoding= [
    {
        language: "cpp",
        code:"c++"
    },
    {
        language: "javaScript",
        code:"js"
    },
    {
        language: "Python",
        code:"py"
    }
]


myCoding.forEach( (item)=> {
    console.log(item.code)
} )