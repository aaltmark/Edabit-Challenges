//Multiple By Length 
    //Create a function to multiply all of the values in an array 
    //by the amount of values in the given array.
    //Examples ---
        //multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function multiplyByLength(arr) {
    //variable that we'll multiply each number in OG array by 
    let multiple = arr.length 

    //variable to hold updated array 
    let final = []

    //for each number in the array 
    for (let num of arr) {
        //multiply it by the # of entires in OG array and push it into the new array 
        final.push(num * multiple)
    }
    return final //return new array 
}


