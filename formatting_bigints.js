// Formating BigInts
    // Write a function that takes as arguments a BigInt and the desired amount of decimals and returns a string 
    // (not a number, as it will lose precision) with the correct amount of decimals.
    // Examples--
        //formatBigInt(1938908490185852058934n, 18) ➞ "1938.908490185852058934"
        //formatBigInt(987654321987654321n, 6 ) ➞ "987654321987.654321"

function formatBigInt(bigNumber, decimals) {
    // turn to array of single numbers that are strings 
    let array = bigNumber.toString().split('')

    // add the decimal at the index so there will be x numbers after it 
    array.splice((array.length - decimals), 0, '.')

    // join the array back together so there will be no spaces or commas 
    return array.join('')
}