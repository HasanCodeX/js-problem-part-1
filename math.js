function findLargestNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Example usage:
const largest = findLargestNumber(5, 10, 3);
console.log(largest); // Output: 10