function increment(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value + 1;
            resolve(newValue);
        }, 1200); 
    });
}

function double(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value * 2;
            resolve(newValue);
        }, 500);
    });
}

function square(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newValue = value * value;
            resolve(newValue);
        }, 1000); 
    });
}

// Starting value
const startValue = 2;

// Execute functions in sequence using promises
 
increment(startValue)
    .then((incrementedValue) => {
    //console.log("Incremented:", incrementedValue);
    return double(incrementedValue);
})
.then((doubledValue) => {
    //console.log("Doubled:", doubledValue);
    return square(doubledValue);
})
.then((squaredValue) => {
    console.log(squaredValue);
})
