async function picnicDecision() {
    try {
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSunny = Math.random() > 0.5;
          if (isSunny) {
            resolve("Let us go for picnic");
          } else {
            reject("Error: It is cloudy");
          }
        }, 3000);
      });
  
      console.log(result); // Log the resolved message
      return result; // Return the value for testing
    } catch (error) {
      console.log(error); // Log the rejected message
      return error; // Return the error for testing
    }
  }
  
  // Call the function explicitly (as required)
  picnicDecision();
  
  // Do not touch the code below:
  module.exports = { picnicDecision };  