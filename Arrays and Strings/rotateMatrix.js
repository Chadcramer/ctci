/* 
Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
write a method to rotate the image by 90 degrees. Can you do this in place? 
*/ 

// hint 1: try thinking about it layer by layer, Can you rotate s specific layer?
// hint 2: Rotating a specific layer would just mean swapping the values in four arrays.
//          If you were asked to swap the values in two arrays, could you do this? 
//          Can you then extend it to four arrays?

// input -> array of arrays
// output -> array of arrays

let rotateMatrix = (array) => {
    // each row becomes a column
    let result = [];
    let newColumn = [];
    for(let i = 0; i < array.length; i++){
        newColumn = [];
        for(let j = 0; j < array[i].length; j++){
            newColumn.unshift(array[j][i]);
        }
        result.push(newColumn);
    }
    // bottom row is first column
    return result; 

}

console.log(rotateMatrix([[1,2,3], [4,5,6], [7,8,9]])) // output -> [[7,4,1], [8,5,2], [9, 6, 3]]


// [                           [
//     [1,2,3],                    [7,4,1],
//     [4,5,6],       --->         [8,5,2],
//     [7,8,9],                    [9,6,3],
//  ]                           ]