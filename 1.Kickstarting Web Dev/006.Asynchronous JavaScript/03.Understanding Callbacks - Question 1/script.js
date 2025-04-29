// Write your code here:

function buyBike(callback) {
    setTimeout(function () {
      console.log("Bought Royal Enfield Himalayan");
      callback(); // Call planTrip() after buying the bike
    }, 2000);
}
  
function planTrip() {
    setTimeout(function () {
      console.log("Trip to Ladakh planned");
    }, 1000); // Executes 1000ms after its invocation
}
  
// Call buyBike and ensure planTrip is invoked at the right time
buyBike(planTrip);
  
  
// Do not touch the code below:
module.exports = {
    buyBike,
    planTrip,
};