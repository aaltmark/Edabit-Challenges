// Tuck In Array 
    // Create a function that takes two arrays and insert the 
    //second array in the middle of the first array.
    //Examples----
        //tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        //tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]


function tuckIn(arr1, arr2) {
	let final = [] //to store 
	for (let num of arr2) { //iterate through each num in 2nd array 
		final.push(num) //push into final in order 
	}
	final.unshift(arr1[0]) //put first num from first array at beginning 
	final.push(arr1[1]) //2nd num in first array at end 
	return final
}

// simplified 
function tuckIn2(arr1, arr2) {
    return [arr1[0], ...arr2, arr1[1]] //return a new array with 
        //1st num of first array 
        //copy of 2nd array 
        //2nd num of first array 
  }

