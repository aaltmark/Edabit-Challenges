//Where is Bob 
    //Write a function that searches an array of names (unsorted) for the name "Bob" 
    //returns the location in the array. If Bob is not in the array, return -1.
    //Examples -- 
        //findBob(["Jimmy", "Layla", "Bob"]) ➞ 2
        //findBob(["Jimmy", "Layla", "James"]) ➞ -1

function findBob(names) {
    //index will keep track of location in array 
    let index = 0 

    //for every name in the array 
    for (let name of names) {
        //if we find bob 
        if (name === 'Bob') {
            return index 
        } else { //if bob is not the current iteration 
            index++ //add 1 to index 
        }
    } //if bob is not found by the last name 
    return -1 //it means he aint there 
}

