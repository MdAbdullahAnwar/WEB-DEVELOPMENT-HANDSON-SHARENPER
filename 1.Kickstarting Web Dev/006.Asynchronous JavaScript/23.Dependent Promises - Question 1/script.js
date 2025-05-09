// Write your code at relevant places in the code below:
function orderFood() {
    return new Promise((resolve, reject) => {
      const random1 = Math.random();
      setTimeout(() => {
        if (random1 > 0.5) {
          resolve("Food delivered");
        }
        else {
          reject("Food not delivered");
        }
      }, 2000);
    });
  }
  
  function orderDessert() {
    return new Promise((resolve, reject) => {
      const random2 = Math.random();
      setTimeout(() => {
        if (random2 > 0.5)
        {
          resolve("Dessert delivered");
        }
        else {
          reject("Dessert not delivered");
        }
      }, 2000);
    });
  }
  
  orderFood()
    .then((resolve) => {
      console.log(resolve);
      return orderDessert();
    })
    .then((resolve2) => {
      console.log(resolve2);
      console.log("Dream Meal fulfilled");
    })
    .catch ((reject) => {
      console.log(reject);
      console.log("Dream Meal failed");
    })
  // Do not touch the code below:
  module.exports = {
    orderFood,
    orderDessert,
  };  