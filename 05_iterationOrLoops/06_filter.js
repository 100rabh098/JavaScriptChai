
const myNums= [1,2,3,4,5,6,7,8,9,10]

//filter if used for filtering lements with some conditions 

// const lessNums= myNums.filter( (num)=>  {
//     return num>=4
// })

let lessNums=[]

myNums.forEach((num)=> {
    if(num>=4) lessNums.push(num)
})
console.log(lessNums)