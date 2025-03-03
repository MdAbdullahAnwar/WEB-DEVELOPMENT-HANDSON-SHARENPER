
//========== User's Code Starts Here ==========
'use strict';

process.stdin.setEncoding('utf-8');

function swap(a, b) {
    // Swapping two numbers using a temporary variable
    let temp = a;
    a = b;
    b = temp;

    // Don't change below code
    console.log('a value is =', a);
    console.log('b value is =', b);
}

async function readInput() {
    let inputString = '';
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);

        // Assuming input is two numbers separated by newlines
        swap(parseInt(inputArr[0]), parseInt(inputArr[1]));
        process.exit();
    });
}

readInput();

//========== User's Code Ends Here ==========