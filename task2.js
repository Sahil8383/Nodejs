function calculateSum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input is not an array');
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            throw new Error('Array contains non-integer values');
        }

        sum += arr[i];
    }

    return sum;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const result = calculateSum(inputArray);
console.log('Sum:', result);
