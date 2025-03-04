'use strict';

process.stdin.setEncoding('utf-8');


//========== User's Code Starts Here ==========
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // Stack to keep track of opening parentheses
    const stack = [];

    // Map to match opening and closing parentheses
    const matchingParentheses = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Iterate through the string
    for (let char of s) {
        if (matchingParentheses[char]) {
            // If it's an opening parenthesis, push it onto the stack
            stack.push(char);
        } else {
            // If it's a closing parenthesis, check if it matches the top of the stack
            if (stack.length === 0 || matchingParentheses[stack.pop()] !== char) {
                return false; // Not a match, return false
            }
        }
    }

    // If stack is empty, the parentheses are balanced
    return stack.length === 0;
};



//========== User's Code Ends Here ==========


//Dont change anything below. If changed click on reset.
async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            output = isValid(inputArr[0]);
            console.log(output);
            process.exit();
            
        })
        

}
readInput();