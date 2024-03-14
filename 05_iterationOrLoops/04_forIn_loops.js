
const myObject={

    cpp:'c++',
    js:'JavaScript',
    rb:'ruby',
    swift:'swift by apple'

}

// forin : loop for objects

for (const key in myObject) {
    
    // console.log(`${key} => ${myObject[key]}`)
}


//forin for arrays

const arr2= ['js', 'cpp','rb','py','java']

for (const key in arr2) {
    // console.log(arr2[key]);  //key gives iteration
}

//for in for maps 

//not possible as maps are iterable not indexive