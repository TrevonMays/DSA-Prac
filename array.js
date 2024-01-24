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


// //Linear Search in Arrays Time Complexity O(n). linear search starts from one end to another to the desired value is found
// const lenSearch = (array, target) =>{ // given two arguments array because that what want to operate on
//     for(let i = 0; i < array.length ; i++){ //target that is what we want to find
//         if( array[i] === target){ // if the array values equals the target return the value
//             return i
//         }
//     }
//     return -1 // if not return - 1 
// }

// const newArr = [1,2,3,4,5]
// let targetValue = 4

// const results = lenSearch(newArr,targetValue)

// if( results === -1 ){
//     console.log(`${targetValue} not found in the array`)
// }else
//     {
//     console.log(`${targetValue} found at the index ${results}`)
// }


// console.log(results)

// //Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search 
// //interval in half. The idea of binary search is to use the information that the array is sorted 
// //and reduce the time complexity to O(log N). 


const binarySearchIterative = (array, target) => {

    let low = 0; //setting low 
    let high = array.length - 1; // settting high 

    while (low <= high) {
    const middle = Math.floor((low + high) / 2);// this defines the middle

        if (array[middle] === target) {
        return middle; // Return the index if the target is found
        } else if (array[middle] < target) {
        low = middle + 1; // Discard the left half
        } else {
        high = middle - 1; // Discard the right half
        }
    }

    return -1; // Return -1 if the target is not found in the array 
};

let sortedArr = [1,2,3,4,5,6,7,8]
let targetValue = 8

let results = binarySearchIterative(sortedArr,targetValue)

if( results != -1){
    console.log(`${targetValue} found at the index ${results}`)
}else{
    console.log(`${targetValue} not found in the array`)
}

console.log(results)