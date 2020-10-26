//Return First and Last Parameter
    //firstArg() should return the first parameter passed in.
    //lastArg() should return the last parameter passed in.
    //Examples---
        //firstArg(1, 2, 3) ➞ 1
        //lastArg(1, 2, 3) ➞ 3

//Using the arguments object 
function firstArg() {
	return arguments[0]
}

function lastArg() {
	return arguments[arguments.length - 1]
}
