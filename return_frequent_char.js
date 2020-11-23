// Return the Most Frequent Character 
    // Write a function that returns the most frequent character in an array of words.
    //If multiple characters tie, list them in alphabetical 
    //Examples-----------
        // mostFrequentChar(["music", "madness", "maniac", "motion"])➞ ["m"]
        // mostFrequentChar(["the", "hills", "are", "alive", "with", "the", "sound", "of", "music"])➞ ["e", "h", "i"]


function mostFrequentChar(arr) {
    let obj = {} //to hold obj with keys of letters and value 
    let max = 0 //to compare maxs to 
    let maxChar = [] //array of keys 
    for (let word of arr) { //iterate through each order in what is passed in
        for (let char of word) { //iterate through each character in each of those words 
            if (!obj[char]) { //if key does not exist yet in the character 
                obj[char] = 1 //set it = to 1 
            } else { //if not
                obj[char] = obj[char] + 1 //increment it by 1 
            }
        }
    }
    for (let key in obj) { //iterate through the final obj 
        if (obj[key] > max) { //if the value is higher 
            max = obj[key] //set new max 
            maxChar = [key] //reset array 
        } else if (obj[key] === max) { //if it's the same as the max 
            maxChar.push(key) //add it to the array 
        }
    }
    return maxChar.sort() //sort the array 
}