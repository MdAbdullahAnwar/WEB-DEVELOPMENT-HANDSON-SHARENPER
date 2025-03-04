

//========== User's Code Starts Here ==========
/**
 * @param {string} str
 * @return {string}
 */
var reverseString = function (str) {
    // Initialize an empty string to store the reversed string
    let reversed = "";

    // Loop through the string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        // Add each character to the reversed string
        reversed += str[i];
    }

    // Return the reversed string
    return reversed;
};

// Don't change anything below. If changed, click on reset.
async function readInput() {
    let inputString = '';
    var output = [];

    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);

        // Call the reverseString function to get the reversed output
        output = reverseString(inputArr[0]);

        // Print the reversed string to the console
        console.log(output.trim());
        process.exit();
    });
}

readInput();

//========== User's Code Ends Here ==========

