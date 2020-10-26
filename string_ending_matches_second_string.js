//Check if String Ending Matches Second String
    //Create a function that takes two strings and returns true 
    //if the first string ends with the second string; otherwise return false.
    //Examples--
        //checkEnding("abc", "bc") ➞ true
        //checkEnding("abc", "d") ➞ false
        //checkEnding("convention", "tio") ➞ false

function checkEnding(str1, str2) {
    //gets rid of what you push in 
    let split = str1.split(str2) //first example ['abc', '']
    
    //would be undefined if it was not the end 
    if (typeof split[1] === "string") {
        //has to handle the third example -- split = ['conven', 'n']
        if (split[1].length === 0) {
            return true 
        }
    }
    return false 
}

//Better Solution 
function checkEnding(str1, str2) {
    return str1.endsWith(str2);
  }


