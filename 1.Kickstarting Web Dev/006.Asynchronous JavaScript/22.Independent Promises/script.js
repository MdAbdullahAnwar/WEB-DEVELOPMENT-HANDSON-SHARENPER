// Write your code at relevant places in the code below:
const projectorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random1 = Math.random();
        if (random1 > 0.5) {
            resolve("Projector rented successfully");
        }
        else {
            reject("Error: Projectors out of stock");
        }
    }, 1000);
});

const pizzasPromise = new Promise((resolve, reject) => {
    const random2 = Math.random();
    setTimeout(() => {
        if (random2 > 0.5) {
            resolve("Pizzas delivered at time");
        }
        else {
            reject("Error: Pizzas not delivered on time");
        }
    }, 2000);
});

const friendsPromise = new Promise((resolve, reject) => {
    const random3 = Math.random();
    setTimeout(() => {
        if (random3 > 0.5) {
            resolve("Both friends available");
        }
        else {
            reject("Error: Both friends not available");
        }
    }, 3000);
});

Promise.all([projectorPromise, pizzasPromise, friendsPromise])
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject) => {
        console.log(reject);
    })


// Do not touch the code below:
module.exports = { projectorPromise, pizzasPromise, friendsPromise };