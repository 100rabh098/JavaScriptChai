

// reduce

let arr=[2,6,9]

// const initializer=0
// const res= arr.reduce( function(accu, curr){
//     return accu+curr
// },initializer)

// let value= arr.reduce( (accu, curr)=> accu+curr , 0 )

// console.log(res)

const study=[
    {
        course: "python",
        price:2000
    },
    {
        course: "cpp",
        price:5000
    },
    {
        course: "java",
        price:100
    },
    {
        course: "js",
        price:999
    }
]


const topay= study.reduce( (acc, curr)=> acc+ curr.price ,0 )

console.log(topay)