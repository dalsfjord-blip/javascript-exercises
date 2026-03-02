const sumAll = function(a, b) {
    // Check if either number is negative
    // 1. Validate: Must be integers AND must be at least 0
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }

    // 2. Identify the smaller and larger of the two numbers
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    // 3. Number of terms in the sequence
    const n = max - min + 1;
    
    // 4. Apply Arithmetic Series formula: n/2 * (first + last)
    return (n * (min + max)) / 2;
};



// Do not edit below this line
module.exports = sumAll;
