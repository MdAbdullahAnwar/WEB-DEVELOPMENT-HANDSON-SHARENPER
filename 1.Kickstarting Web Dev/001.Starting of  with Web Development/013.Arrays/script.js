

//========== User's Code Starts Here ==========
/**
 * @param {array} arr
 * @return {number}
 */
var secondmax = (arr) => {
    // Initialize a variable to store the maximum number
    let max = arr[0]; // Assume the first element is the largest

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update the max if we find a larger number
        }
    }

    // Return the maximum number found
    return max;
};

async function readInput() {
    let inputString = '';
    var output = [];

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);

        // Convert input string into an array of numbers
        output = secondmax(inputArr[0].split(',').map(num => parseInt(num.trim())));

        // Log the result (output will be a number, no need for trim)
        console.log(output);
        process.exit();
    });
}

readInput();

//========== User's Code Ends Here ==========

