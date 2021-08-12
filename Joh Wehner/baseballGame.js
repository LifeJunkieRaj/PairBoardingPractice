// Create a variable to store the results of each operation on each element of the index of ops.
// Create a for loop and iterate through each element of the index of ops
// Then we create an else_if statement stating that if the element is “C” we pop the last element off of the results array.
// Then we create an else_if statement stating that if the element is “D” we multiply the current element by 2 and then push it to the results array.
// Then we create an else_if statement that if the element is "+" when we add the element of the ops array to the sliced last element of the results array and then push the sum to the results array
// Then we create an else statement that if the element of the index is just an integer, we push that element into the results array.
// Once you are out of the for loop, you run the sum function on the results array and return it


function baseballGame(ops) {
    let results = [];
    for (let i = 0; i < ops.length; i++) {
        let char = ops[i];
        if (char === "C") {
            results.pop()
            
        } else if (
            char === "D"
        ) {
            results.push(results[results.length - 1] * 2)
            
        } else if (
            char === "+" 
        ) {
            results.push(results[results.length-1] + results[results.length-2])
            
        } else {
            results.push(parseInt(char))
        }
    }
    return results.reduce((acc, el) => acc + el)
}

Input: ops = ["5","2","C","D","+"]
console.log(baseballGame(ops))