// Array of Consecutive Numbers
    // Implement a function that returns an array containing all the consecutive numbers in ascendant order from the 
    // given value low up to the given value high (bounds included).
    // Examples----
        //getSequence(1, 5) ➞ [1, 2, 3, 4, 5]

function getSequence(low, high) {
    arr = [] //to hold final array 
    for (let i = low; i <= high; i++) { //iterate from the low number to high 
        arr.push(i) //keep adding to array 
    }
    return arr
}


