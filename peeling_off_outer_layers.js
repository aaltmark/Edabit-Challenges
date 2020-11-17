// Peeling Off the Outer Layers 
    // Given an array of arrays, return a new array of arrays 
    // containing every element except the outer elements
    // Example ---
        /*
        peelLayerOff([
            ["a", "b", "c", "d"],
            ["e", "f", "g", "h"],
            ["i", "j", "k", "l"],
            ["m", "n", "o", "p"]
        ]) ➞ [
            ["f", "g"],
            ["j", "k"]
        ]
        */

function peelLayerOff(arr) {
    return arr.slice(1, -1).map(x => x.slice(1,-1))
        // arr.slice => make a shallow copy of arr that starts at 2nd row (index 1) and ends at 2nd to last row
        // go through each element of the new array (which will be each row) and make a copy of that starting at 2nd element and ending at 2nd to last  
}