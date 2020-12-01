// Convert Key, Values in an Object to Array 
    // Write a function that converts an object into an array of keys and values.
    //objectToArray({D: 1, B: 2,C: 3}) ➞ [["D", 1], ["B", 2], ["C", 3]]

function objectToArray(obj) {
    let arr = []
    // iterate through obj 
    for (let key in obj) {
        // add a new array with the key and value 
        arr.push([key, obj[key]])
    }
    return arr
} 