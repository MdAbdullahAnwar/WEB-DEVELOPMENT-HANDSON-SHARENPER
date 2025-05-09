// Function to check car condition
function checkCar() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.5) {
                resolve("Car is ready");
            } else {
                reject("Error: Car needs maintenance");
            }
        }, 2000);
    });
}

// Function to check picnic packing
function packForPicnic() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.5) {
                resolve("Packed everything for picnic");
            } else {
                reject("Error: Not have some essentials");
            }
        }, 1000);
    });
}

// Function to decide whether to go for a picnic
async function goForPicnic() {
    try {
        const carStatus = await checkCar();  // Wait for car check
        console.log(carStatus);

        const packingStatus = await packForPicnic();  // Wait for packing check
        console.log(packingStatus);

        console.log("Go for picnic");  // If both resolve, go for picnic

    } catch (error) {
        console.log("Picnic cancelled");  // If any fails, cancel picnic
    }
}

// Call the function to check and decide
goForPicnic();

// Do not touch the code below:
module.exports = { checkCar, packForPicnic };