// Concatenate Variable Number of Input Arrays
    //Create a function that concatenates n input arrays, where n is variable.
    //Examples---
        //concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
        //concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

function concat(...args) {
    let arr = []
    // iterate through each array 
    for (let element of args) {
        // get each item in each array 
        for (let item of element) {
            // add to final arr
            arr.push(item)
        }
    }
    return arr
}

// other solution 

function concat2(...args) {
    return [].concat(...args)
  }