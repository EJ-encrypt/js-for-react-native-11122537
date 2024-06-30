// arrayManipulation TASK 1

function processArray(numb) {
    return numb.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square even numbers
        } else {
            return num * 3; // Triple odd numbers
        }
    });
}

// TASK 2

const processArray = require('./processArray').processArray;

// Function to format array strings
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize entire string if number is even
        } else {
            return str.toLowerCase(); // Convert string to lowercase if number is odd
        }
    });
}

