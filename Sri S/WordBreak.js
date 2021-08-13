var wordBreak = function(s, wordDict) {
    // We are going to loop through wordDict
    for(let word of wordDict) {
        // At each element of the index we are going to check s to see if that element exists within its string
        if(s.includes(word)) {
            // If it does exist, we are going to replace with an empty string
            s = s.replace(word, '');
        }
    }
    // Once we've iterated through all the strings in wordDict, if s is empty, we return true and if it is not empty, we return false
    return s.length === 0
};

let s = "traintrackedontrack" 
let wordDict = ["train", "tracked", "dont", "track"]
console.log(wordBreak(s, wordDict))
// Output: false

