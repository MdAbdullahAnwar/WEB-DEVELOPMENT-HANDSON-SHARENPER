// Write your code here:
async function boardingBus() {
    try {
      // Write your code here
      function boardBus() {
        return new Promise((resolve, reject) => {
          setTimeout(function () {
            const random = Math.random();
            if (random > 0.5)
            {
              resolve("Board the bus");
            }
            else
            {
              reject("Error: Bus is late")
            }
          }, 3000);
        })
      }
  
      const step1 = await boardBus();
      console.log(step1);
    } catch (error) {
      console.log(error);
    }
  }
  
  boardingBus();
  
  // Do not touch the code below:
  module.exports = { boardingBus };  