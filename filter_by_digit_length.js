// Filter By Digit Length 
    // Create a function tha tfilters out an array to include numbers
    // who only have a certain number of digits 
    // Example---- 
        /* filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
            Include only numbers with 3 digits.
            */

function filterDigitLength(arr, num) {
	let myArr = [] //to hold final
	for (let element of arr) { //iterate through every element of the array 
		if (element.toString().length === num) { //convert it to string and check length against num passed in 
			myArr.push(element) //if it's the same, add it to my array 
		}
	}
	return myArr;
}