

//for of

const arr=[1,2,3,4,5]

for (const it of arr) {
    //console.log(it)
}

const greetings= "Hello! World"

for (const it of greetings) {
    if(it==' ') continue;
    // console.log(`Each char is ${it}`);
}

///Maps

const map= new Map()

map.set('IND','INDIA')
map.set('USD','United States of America')
map.set('F','France')

// console.log(map)

for (const [key, value] of map) {

   // console.log(key, '  => ', value)
}

//forof in object

const myObject={
    'game1': "football",
    'game2': "badminton"
}

// for (const [key, value] of myObject) {          //objects are not iterable so error
//    // console.log(key, '  => ', value)      

// }