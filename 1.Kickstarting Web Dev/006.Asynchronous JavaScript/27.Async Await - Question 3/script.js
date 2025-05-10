async function happyMeal() {
    // Write your code here
    try{
      const pizzaResult = await new Promise((resolve, reject) => {
        const random1 = Math.random();
        setTimeout(() => {
          if (random1 > 0.5)
          {
            resolve("Pizza has been delivered!");
          }
          else
          {
            reject("Pizza delivery failed.");  
          }
        }, 2000);
      });
      console.log(pizzaResult);
  
  
      const desertResult = await new Promise((resolve, reject) => {
        const random2 = Math.random();
        setTimeout(() => {
          if (random2 > 0.5)
          {
            resolve("Dessert has been delivered!");
          }
          else {
            reject("Dessert delivery failed.");
          }
        }, 1000);
      });
      console.log(desertResult);
  
      //return {pizzaResult, desertResult};
    }
    catch(error){
      console.log(error)
    }
  }
  
  happyMeal();
  
  // Do not touch the code below:
  module.exports = { happyMeal };  