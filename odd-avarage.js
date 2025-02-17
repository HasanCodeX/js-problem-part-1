function averageOfOdds(arr) {
    // Filter out the odd numbers
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    
    // Calculate the sum of the odd numbers
    const sum = oddNumbers.reduce((acc, num) => acc + num, 0);
    
    // Calculate the average
    const average = oddNumbers.length ? sum / oddNumbers.length : 0;
    
    return average;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(averageOfOdds(numbers)); // Output: 5