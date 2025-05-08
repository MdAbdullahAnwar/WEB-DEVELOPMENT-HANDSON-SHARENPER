// Write your code at relevant places in the code below::
function checkWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const prediction = Math.random() * 50;
            if (prediction > 25)
            resolve('Let us go for picnic');
            else {
                reject('Error: It is cloudy');
            }
        }, 3000);
    })
}

checkWeather().then((resolve) => {
    console.log(resolve);
}).catch((reject) => {
    console.log(reject);
});

// Do not touch the code below:
module.exports = checkWeather;