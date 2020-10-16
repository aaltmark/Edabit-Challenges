//Semantic Versioning 
    //Write three separate functions, one to retrieve each element in the semantic versioning specification.
    //In semantic versioning -- 6.1.9.
    //1st = major | 2nd = minor | 3rd = patch 
    //Examples --- 
        //6.1.9
            //retrieveMajor("6.1.9") ➞ "6"
            //retrieveMinor("6.1.9") ➞ "1"
            //retrievePatch("6.1.9") ➞ "9"
    
function retrieveMajor(semver) {
    //split array by each period 
    let arr = semver.split('.') //6.1.9 => [6, 1, 9]

    //major will now be at the first indice
    return arr[0]
}

function retrieveMinor(semver) {
    let arr = semver.split('.')
    return arr[1]
}

function retrievePatch(semver) {
    let arr = semver.split('.')
    return arr[2]
}