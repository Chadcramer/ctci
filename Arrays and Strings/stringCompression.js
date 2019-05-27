/*
    Implement a method to perform basic string compression using the counts of repeated characters. 
    For example, the string aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than 
    the original string, your method should return the original string. You can assume the string has only uppercase 
    and lowercase letters(a-z).
*/


// input -> string
// output -> string

let stringCompression = (string) => {
    // declare occurance counter
    // declare current letter
    // declare compressed string
    let occuranceCounter = 1;
    let currentLetter = string[0];
    let compressedString = '';
    // iterate through string
    for(let i = 1; i <= string.length; i++){ 
        // if current letter is similar to char then increment counter
        if(string[i] === currentLetter){
            occuranceCounter++;
        } else {
            compressedString += currentLetter + occuranceCounter.toString();
            occuranceCounter = 1;
            currentLetter = string[i];
        }
        // if different, concat letter with counter, then reset counter
    }
    return compressedString;
}

console.log(stringCompression('aabcccccaaa')); // output -> a2b1c5a3