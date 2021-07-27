// First we create a variable for an object whose keys are the opening parentheses of all three types of brackets and their corresponding 
// values are the closing brackets for those same parentheses.  We should also create a variable for a empty array where we can push 
// and pop the value of key when it is identified as char.  We now iterate through given string.  At each element we run a conditional 
// checking if the value of the key matches the current element char, then we push that value bracket into the heap.  If they do 
// 


let isValid = function (s) {
    let bracket = {
    '(':')', '[':']', '{':'}'
}

let heap = [];

for (let char of s) {
    if (bracket[char]) {
        heap.push(bracket[char])
    } else {
        if (heap.pop() !== char) return false
    }
}
return (!heap.length)
}

s = "(]"
console.log(isValid(s));