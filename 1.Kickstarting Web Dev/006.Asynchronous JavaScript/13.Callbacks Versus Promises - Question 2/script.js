// Write your code at relevant places in the code below:
function boilWater() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Water boiled");
      }, 2000);
    })
  }
  
  function addCoffeePowder() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Added coffee powder");
      }, 500);
    })
  }
  
  function brewCoffee() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Brewed coffee");
      }, 1000);
    })
  }
  
  function haveCoffee() {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Enjoying my coffee");
      }, 3000);
    })
  }
  
  boilWater().then((result) => {
    console.log(result);
  })
  addCoffeePowder().then((result) => {
    console.log(result);  
  })
  brewCoffee().then((result) => {
    console.log(result);
  })
  haveCoffee().then((result) => {
    console.log(result);
  })
  
  // Do not touch the code below:
  module.exports = {
    boilWater,
    addCoffeePowder,
    brewCoffee,
    haveCoffee,
  };  