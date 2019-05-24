/* Given a string, write a function to check if it is a permutation of a palindrome. 
    A palindrome is a word or phrase that is the same forwards and backwards. 
    A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
*/

let palindromePermutation = (string) => {
    // if even: there must be two of every char
    // if odd: there must only be one unique char
    
    // use hash table to store letters
    let letterCount = {};
    let counter = 0;
    // if we see the same letter again, delete from hash
    for(let letter of string){
        if(letter === ' '){
            continue;
        }
        if(letterCount[letter]){
            delete letterCount[letter];
        } else {
            letterCount[letter] = true;
        }
        counter++;
    }
    // check hash at the end: odd - 1 key left, even - no keys left
    if(counter % 2 === 0){
        return Object.keys(letterCount).length === 0;
    } else {
        return Object.keys(letterCount).length === 1;
    }
    // skip spaces
   
}

console.log(palindromePermutation('taco cat')); // true
console.log(palindromePermutation('atco cat')); // true
console.log(palindromePermutation('aabbc')); // true
console.log(palindromePermutation('chirpingmermaid')); // false
console.log(palindromePermutation('aabc')); // false
