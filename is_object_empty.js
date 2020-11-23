// Is the Object Empty? 
    // write a function that returns true if an object is empty and false otherwise 
    // Examples----
        // isEmpty({}) ➞ true
        // isEmpty({ a: 1 }) ➞ false

function isEmpty(obj) {
    return (Object.keys(obj).length === 0) //return boolean of 
        // look at all keys and if length is 0 return true 
}