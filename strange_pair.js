// Strange Pair 
    // given 2 strings, return true if 
    // 1st letter of 1st string = last letter of 2nd string AND 
    // 1st letter of 2nd string = last letter of 1st string 
    // Example -- 
        //isStrangePair("sparkling", "groups") ➞ true

function isStrangePair(str1, str2) {
    //make strings into arrays 
    let arr1 = str1.split('') 
    let arr2 = str2.split('')
    
    //return true if index 0 (first char) = last char in oppo and vise-versa
    return (arr1[0] === arr2[arr2.length - 1] && arr2[0] === arr1[arr1.length - 1])
}