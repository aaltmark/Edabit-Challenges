// Find the Second Largest Number 
    // Create a function that takes an array of numbers and returns the second largest number.
    //Examples---
        //secondLargest([10, 40, 30, 20, 50]) ➞ 40

function secondLargest(arr) {
    let largest = arr[0] //set = first item in array
    let secondLargest = -201 //placeholder 
    
    // iterate through array 
    for (let num of arr) {
        // if the num is greater than current largest 
        if (num > largest) {
            secondLargest = largest //push current largest to 2nd 
            largest = num //set largest to this iteration's num
        }
        // if between the largest and 2nd 
        if (num > secondLargest && num < largest) {
            secondLargest = num //reset the 2nd 
        }
    }
    return secondLargest
}

// other solution 
function secondLargest2(arr) {
    return arr.sort((a,b) => b - a)[1]
  }