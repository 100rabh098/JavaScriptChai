

//map : arey wo wala map nhi h

const arr= [1,2,3,4,5,6,7,8,9,10]

// const newarr= arr.map( (item)=> {return item+=10} )

const newarr= arr.map( (num)=> num*10).map((num)=> num+1).filter( (n) => n>40 )          //multiply by 10  and add 1

console.log(newarr)

