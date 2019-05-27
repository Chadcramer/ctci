/* Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.
*/

urlify = (str, length) => {
    let removeSpaces = str.split(' ');
    let combinedWithNew = removeSpaces.join('%20');
    return combinedWithNew;
}

console.log(urlify('Mr John Smith', 13)) // -> 'Mr%20John%20Smith'
