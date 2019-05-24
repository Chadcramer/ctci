/*
    Assume you have a method isSubstring which checks if one word is a substring
    of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 
    using only one call to isSubstring.
*/

// input -> string, string
// output -> boolean

let stringRotation = (s1, s2) => {
    // concat s2 twice
    let bigString = s2.concat(s2);
    // check if concatenation contains s1
    return bigString.includes(s1);
    // return result 
}


// ex 'waterbottle' is a rotation of 'erbottlewat';
console.log(stringRotation('waterbottle', 'erbottlewat')); // output -> true