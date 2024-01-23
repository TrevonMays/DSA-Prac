// //creating an array
// const myArray = [1, 2, 3, 4, 5];

// // choosing a value in the array
// const valuesToSearch = 13;

// // inserted new values into an array and push multiple values
// let newValues = [11,12,13,14,15]
// myArray.push(...newValues)

// //If myArray has the value show it if not still show it but say not found
// if (myArray.includes(valuesToSearch)) {
//     console.log(`${valuesToSearch} found in the array.`);
// } else {
//     console.log(`${valuesToSearch} not found in the array.`);
// }

// // how to delete  a value
// const valuesToDelete = 5;

// const newArray = myArray.filter(item => item !== valuesToDelete )

// console.log(newArray) // output


//Linear Search in Arrays Time Complexity O(n)
const lenSearch = (array, target) =>{ // given two arguments array because that what want to operate on
    for(let i = 0; i < array.length ; i++){ //target that is what we want to find
        if( array[i] === target){ // if the array values equals the target return the value
            return i
        }
    }
    return -1 // if not return - 1 
}

const newArr = [1,2,3,4,5]
let targetValue = 4

const results = lenSearch(newArr,targetValue)

if( results === -1 ){
    console.log(`${targetValue} not found in the array`)
}else
    {
    console.log(`${targetValue} found at the index ${results}`)
}


console.log(results)