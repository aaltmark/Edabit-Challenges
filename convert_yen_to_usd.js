// Convert Yen to USD 
    // Each yen to USD is yen / 107.5 
    // Round to 2 decimals 

function yenToUsd(yen) {
    let string = (yen /107.5).toFixed(2) //will round the conversion to 2 decimals 
return parseFloat(string, 10) //need to use parseFlota since not an integer 
}