function step1() {
    //complete this function
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Step 1 completed");
      }, 2000);
    }); 
  }
  
  function step2() {
     //complete this function
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve("Step 2 completed");
      }, 1000);
    });
  }
  
  function step3() {
    return new Promise(function (resolve, reject) {
      resolve("All steps completed");
    });
  }
   
  // Execute steps in sequence using promises
  
  step1().then((result) => {
    console.log(result);
  
    step2().then((result) => {
      console.log(result);
  
      step3().then((result) => {
        console.log(result);
  
      });
  
    });
  
  });  