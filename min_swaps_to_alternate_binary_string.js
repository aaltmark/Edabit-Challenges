// Minimum Swaps to Alternate a Binary String 
    // Write a function that returns the minimum number of swaps to create an alternating binary string. 
    // The input will have the same number of zeroes and ones.
    // Examples--
        //minSwaps("101010") ➞ 0
        //minSwaps("10001110") ➞ 1
                // Swap the 0 at index 2 for the 1 at index 5.

    
// i don't get it 
function minSwaps(string){
    var checkA = "0";
    var aSwaps = 0;
    var checkB = "1";
    var bSwaps = 0;
    var temp = "";
    for(let i = 0; i < string.length; i++){ //iterate once for every character in the string 
        if(string[i] != checkA) { //if first letter is a 1 
        aSwaps++; //increment a
    }
    if(string[i] != checkB) { //if first letter is a 0 
        bSwaps++; //increment b 
    }
    temp = checkB; //set temp - to 1
    checkB = checkA; //set a also to 1 
    checkA = temp;
    }
    return Math.min(aSwaps, bSwaps)/2; //takes either a or b whichever is lower and divides it by 2 
}


