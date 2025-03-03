

//========== User's Code Starts Here ==========
/**
 * @param {array} arr
 * @return {number}
 */
var secondmax = (arr) => {
    // Convert the array elements to integers
    arr = arr.map(num => parseInt(num.trim()));

    // Initialize variables to track the maximum and second maximum numbers
    let max = -Infinity;
    let secondMax = -Infinity;

    // Loop through the array to find the max and second max values
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;  // Update secondMax before max
            max = arr[i];     // Update max
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i]; // Update secondMax if current element is smaller than max but larger than secondMax
        }
    }

    // Return the second maximum number
    return secondMax;
};

async function readInput() {
    let inputString = '';
    var output = [];

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);

        // Split the input by commas and pass it to the secondmax function
        output = secondmax(inputArr[0].split(','));

        // Log the result (output will be a number, no need for trim)
        console.log(output);
        process.exit();
    });
}

readInput();

//========== User's Code Ends Here ==========

