//Find the Smallest Number in an Array
    //Create a function that takes an array of numbers and returns the smallest number in the set.
    //Examples ---
        //findSmallestNum([34, 15, 88, 2]) ➞ 2
        //findSmallestNum([-76, 1.345, 1, 0]) ➞ -76

function findSmallestNum(arr) {
    //variable to hold the smalles number
    let min = 1000000000
    
    //for every number in the array 
    for (let num of arr) {
        //compare it to the current min - if smaller 
        if (num < min) {
            //replace the variable with this number 
            min = num
        }
    }
    return min //last number standing wins 
}


