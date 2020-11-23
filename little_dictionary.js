// Little Dictionary 
    // Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.
    //Example-----
        // dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]

function dictionary(initial, words) {
    let arr = [] //to hold final 
    let split = initial.length //count how many letters in initial to know when to slice aat  
    
    // iterate through each word in the given array 
    for (let word of words) { 
        if (word.slice(0, split) === initial) { //if the word sliced at the letter that would compare is equal to the initial arg
            arr.push(word) //put it into our array 
        }
    }
    return arr
}