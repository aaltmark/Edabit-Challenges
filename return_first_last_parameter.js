// Return First and Last Parameter 
    // firstArg() should return the first parameter passed in.
    // lastArg() should return the last parameter passed in.
    //Example ---- 
        // firstArg(1, 2, 3) ➞ 1
        // lastArg(1, 2, 3) ➞ 3

function firstArg() {
    return arguments[0] //arguments object 
}

function lastArg() {
    return arguments[arguments.length - 1]
}