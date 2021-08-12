var suggestedProducts = function(products, searchWord) {
    // Create a result array and store in variable results
    let results = [];
    // Sort products array lexicographically and store in a variable i.e. sortedProducts
    products.sort()
    // Create a for loop to iterate through indexes of searchWord
    for (let i = 0; i < searchWord.length; i++) {
        // Store sliced string (from searchWord) in a new variable i.e. currentSearchTerm
        let currSearchTerm = searchWord.slice(0, i+1)
        // Create a temporary internal array
        let tempArr = [];
        // Create a normal for loop through sortedProducts 
        for (let product of products) {
            // Check if current product string starts with or matches currentSearchTerm and if temp internal array length is not greater than 3
            if (product.startsWith(currSearchTerm) && tempArr.length < 3) {
                // If true, push current product string into temporary internal array
                tempArr.push(product)
            }
        }
        // Once out of internal for loop (sortedProudcts), push tempInternalArr into result array
        results.push(tempArr)
    }
        return results
}

let products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
console.log(suggestedProducts(products, searchWord));