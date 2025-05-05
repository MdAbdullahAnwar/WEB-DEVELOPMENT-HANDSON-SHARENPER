function add(value) {
    // code here
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            value = value + 3;
            console.log('Added 3');
            resolve(value);
        }, 2000);
    })
}

function multiply(value) {
    // code here
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            value = value * 2;
            console.log('Multiplied by 2');
            resolve(value);
        }, 1000);
    })
}

// Initial value
const initialValue = 2;

// Execute operations in sequence using promises
add(initialValue)
.then((addedValue) => {
    return multiply(addedValue);
})
.then((finalResult) => {
    console.log(`Final result: ${finalResult}`);
});