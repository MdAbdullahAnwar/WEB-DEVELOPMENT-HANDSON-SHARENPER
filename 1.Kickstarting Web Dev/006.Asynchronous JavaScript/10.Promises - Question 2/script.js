// Write your code at relevant places in the code below:
function loanSanctionPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const mimic = Math.random();
            if (mimic > 0.5) {
                resolve("Loan sanctioned");
            }
            else {
                reject("Loan not sanctioned");
            }
        }, 3000);
    });
}

loanSanctionPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
// Do not touch the code below:
module.exports = loanSanctionPromise;