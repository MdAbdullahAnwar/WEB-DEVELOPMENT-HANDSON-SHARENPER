//========== User's Code Starts Here ==========
var convertTemp = (temp, unit) => {
    // Convert the temperature based on the unit using ternary operator
    return unit === 'K'
        ? temp + 273  // Convert from Celsius to Kelvin
        : unit === 'C'
            ? temp - 273  // Convert from Kelvin to Celsius
            : "Invalid unit"; // Return error if invalid unit is provided
};

async function readInput() {
    let inputString = '';
    var output = [];
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);
        const argumentsArr = inputArr[0].split(',');
        output = convertTemp(Number(argumentsArr[0]), argumentsArr[1].trim());
        console.log(output);
        process.exit();
    });
}

readInput();  // Call the function to start the input process

//========== User's Code Ends Here ==========