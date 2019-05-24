/* 
    There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.  Given two strings, write a function to check if they are one edit (or zero edits) away
*/


// input -> string, string
// output -> boolean 
// constraints -> optimize 
// edgecases -> empty string


let oneAway = (s1, s2) => {
    let edits = 1;
    let maxLen = Math.max(s1.length, s2.length);
    let diff = Math.abs(s1.length - s2.length);

    if(diff > edits){
        return false;
    }

    for(let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++){
        let c1 = s1[i];
        let c2 = s2[j];
        if(c1 !== c2){
            edits--;
            if(edits < 0){
                return false;
            }
            if(c1 === s2[j + 1]){ // inserted
                j++;
            } else if(s1[i + 1] === c2){ // removed
                i++;
            }
        }
        return true;
    }
    // if insert, then s1's current char should match s2's next char
    // if remove, then s1's next char should match s2's current char
    // if replace, then s1's next char should match s2's next char
    
    // max one edit
    // if diff in lengths is greater than max edit, return false
    
    // iterate through strings at the same time, checking for diff
    // store max length for forloop condition 
    // if diff is found, decrement edits, check if edits dropped below zero, if so return false
    // when forloop is done, return true
    
};
  
  
  // Test
console.log(oneAway('pale', 'ple'), true);
//   console.log(oneAway('pales', 'pale'), true);
//   console.log(oneAway('pale', 'bale'), true);
//   console.log(oneAway('pale', 'bake'), false);