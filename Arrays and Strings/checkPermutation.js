// given two strings, write a method to decide if one is a permutation of the other

// input -> string, string
// output -> 
checkPermutation = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    // loop through str2
    for(let i = 0; i < str1.length; i++){
        if(str2.includes(str1[i]) === false){
            return false;
        }
    }
    return true;
}

console.log(checkPermutation("dog", "god")); // true
