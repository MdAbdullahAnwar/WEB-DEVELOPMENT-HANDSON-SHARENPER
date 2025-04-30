// Write your code at relevant places in the code below:
function concertPassPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const concertPass = Math.random();
            if (concertPass > 0.5) {
                resolve("Pass received");
            }
            else {
                reject("Pass not received");
            }
        }, 3000);
    });
}

concertPassPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
// Do not touch the code below:
module.exports = concertPassPromise;