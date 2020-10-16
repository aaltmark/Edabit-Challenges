//Convert Number to String of Dashes
    //Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
    //Examples -- 
        //Go(1) ➞ "-"
        //Go(5) ➞ "-----"

function Go(num) {
    //empty string to start 
    let str = '';
    //from 0 - 1 less than number
    for(var i = 0; i < num; i++){
        //add a - to the string 
        str += '-';
    }
    return str;
}


function Go(num) {
    //repeat will 
    return "-".repeat(num);
}