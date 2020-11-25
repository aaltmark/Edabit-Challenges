// Multi-Division 
    // Create a function that will for given a, b, c do the following:
        // add a to itself b times
        // check is the result is divisible by c 
        // a is not always the original a 
        // Example----
            //abcmath(42, 5, 10) ➞ false
                // KEY: 42+42 = 84,84+84 = 168,168+168 = 336,336+336 = 672, 672+672 = 1344
                // 1344 is not divisible by 10


function abcmath(a, b, c) {
    let num = a //starting 
    for (i = 0; i < b; i++) { //loop b times 
        num = a + a //add a to itself and reset num 
    }
    return (num % c === 0) //check if that final is divisible by c 
}