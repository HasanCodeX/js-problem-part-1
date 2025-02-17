function noDuplicate(array) {
    return [...new Set(array)];
}

function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

// Example usage:
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const anotherArrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const anotherUniqueArray = noDuplicate(anotherArrayWithDuplicates);
console.log(anotherUniqueArray); // Output: [1, 2, 3, 4, 5]