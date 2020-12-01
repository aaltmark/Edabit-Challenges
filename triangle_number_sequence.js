// Triangle Number Sequence 
    //This Triangular Number Sequence is generated from a pattern of dots that form a triangle. 
    //It's essentially adding up number given 
    // Example --- 
        //triangle(6) ➞ 21 ==> 6 + 5 + 4 + 3 + 2 + 1

function triangle(n) {
    counter = 0
    //iterate from n to 0 
    for (let i = n; i >= 0; i--) {
        //for each iteration add the num to the counter 
        counter = counter + i
    }
    return counter
}    


