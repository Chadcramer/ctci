// implement an algorithm to determine if a string has all unique characters

isUnique = (string) => {
    // declare empty object
    let letterCounter = {};
    // loop through string
    for (let letter of string){
        // add each letter as key in object, value count number of occurances
        if(letterCounter[letter]){
            letterCounter[letter]++;
        } else {
            letterCounter[letter] = 1;
        }
    }
    // go through object
    for(let key in letterCounter){
        if(letterCounter[key] > 1){
            return false;
        }
    }
        // if a value is greater than 1 return false
    return true;
}

console.log(isUnique('qweruomnkl'));

