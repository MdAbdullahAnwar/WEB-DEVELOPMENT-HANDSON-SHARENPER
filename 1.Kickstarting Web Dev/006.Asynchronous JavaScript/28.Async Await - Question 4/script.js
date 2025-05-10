async function picnicReady() {
    // Write your code here
    try {
      const carCheck = await new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
          if (random > 0.5) {
            resolve("Car is ready");
          }
          else {
            reject("Error: Car needs maintenance");
          }
        })
      });
      console.log(carCheck);
  
      const packForPicnic = await new Promise((resolve, reject) => {
        const random2 = Math.random();
        setTimeout(() => {
          if (random2 > 0.5) {
            resolve("Packed everything for picnic");
          }
          else {
            reject("Error: Not have some essentials");
          }
        }, 1000);
      });
      console.log(packForPicnic);
    }
    catch (error) {
      console.log(error);
    }
  }
  
  picnicReady();
  
  // Do not touch the code below:
  module.exports = { picnicReady };  