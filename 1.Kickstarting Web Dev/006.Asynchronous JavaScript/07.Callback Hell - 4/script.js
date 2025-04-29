function step1(callback) {
    // complete this function
    setTimeout(function () {
      console.log("Step 1 completed");
      callback();
    }, 2000);
}
  
  
function step2(callback) {
   // complete this function
    setTimeout(function () {
      console.log("Step 2 completed");
      callback();
    }, 1000);
}
  
function step3(callback)
{
    console.log("All steps completed");
}
  
step1(() => {
    step2(() => {
      step3();
    });
}); 
  
  
// create callback hell here after completing the above function