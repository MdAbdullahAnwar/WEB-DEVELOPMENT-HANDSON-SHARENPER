

//========== User's Code Starts Here ==========
/**
 * @param {array} arr
 * @return {number}
 */
var findminimumnumber = (arr) => {
    // Initialize a variable to store the minimum number
    let min = arr[0]; // Assume the first element is the smallest

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update the min if we find a smaller number
        }
    }

    // Return the minimum number found
    return min;
};

async function readInput() {
    let inputString = '';
    var output = [];

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);

        // Convert input string into an array of numbers
        output = findminimumnumber(inputArr[0].split(',').map(num => parseInt(num.trim())));

        // Log the result (output will be a number, no need for trim)
        console.log(output);
        process.exit();
    });
}

readInput();

//========== User's Code Ends Here ==========

