function add(value, callback) {
    setTimeout(function () {
      value = value + 3;
      console.log("Added 3");
      callback(value);  // Pass updated value to the callback
    }, 2000);
}
  
function multiply(value, callback) {
    setTimeout(function () {
      value = value * 2;
      console.log("Multiplied by 2");
      callback(value);  // Pass updated value to the callback
    }, 1000);
}
  
function finalResult(value) {
    console.log(`Final Result: ${value}`);
}
  
// Don't change it
const initialValue = 2;
  
// Callback hell structure with proper value passing
add(initialValue, (addedValue) => {
    multiply(addedValue, (multipliedValue) => {
      finalResult(multipliedValue);
    });
});  