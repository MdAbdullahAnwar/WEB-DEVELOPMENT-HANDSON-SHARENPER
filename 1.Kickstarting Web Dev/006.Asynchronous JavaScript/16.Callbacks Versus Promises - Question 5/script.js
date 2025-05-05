// convert this function to promises
function stepOne() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Step 1');
            const message = "Message from Step 1";
            resolve(message);
        }, 2000);
    });
}

function stepTwo(message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Step 2 received: ${message}`);
            resolve("All steps completed");
        }, 1000);
    });
}

// create promises chanining here

stepOne()
    .then((result) => stepTwo(result))  
    .then((finalMessage) => {
        console.log(finalMessage); 
})