//Check if the Same Case 
    //Create a function that returns true if an input string contains only 
    //uppercase or only lowercase letters.
    //Examples---
        //sameCase("hello") ➞ true
        //sameCase("ketcHUp") ➞ false
        
function sameCase(str) {
    //two variables to hold letters 
    let upperCase = []
    let lowerCase = []

    //iterate over each letter in the string 
    for (let letter of str) {
        //if the letter matches the letter if upperCased 
        if (letter === letter.toUpperCase()) {
            //push it into upperCase array 
            upperCase.push(letter)
        } 
        if (letter === letter.toLowerCase()) {
            lowerCase.push(letter)
        }
    }

    //if either array are empty
    if (upperCase.length === 0 || lowerCase.length === 0) {
        return true //then letters are all one or the other 
    } else {
        return false 
    }
}

//Shortened Version 

function sameCase(str) {
	return str.toUpperCase() == str || str.toLowerCase() == str;
}

