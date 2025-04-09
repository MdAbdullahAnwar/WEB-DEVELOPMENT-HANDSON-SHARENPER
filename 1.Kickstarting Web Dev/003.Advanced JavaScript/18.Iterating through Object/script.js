function findAverage(obj){
    //complete this function such that it return the average of all keys
    //returns average value
     let sum = 0;
     let count = 0;
 
     // Iterate over object properties
     for (let key in obj) {
         sum += obj[key]; // Add each value to sum
         count++; // Count the number of keys
     }
     
     return count === 0 ? 0 : sum / count; // Avoid division by zero
 }
 
 
 // Do not touch anything below this line
 async function readInput() {
         let inputString = '';
         var output=[];
         process.stdin.on('data', inputStdin => {
             inputString += inputStdin;
             const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
             const argumentsArr = inputArr[0].split(',');
             const obj = {}
             argumentsArr.forEach(argument => {
                 const argumentArr = argument.split(' ')
                 obj[argumentArr[0]] = Number(argumentArr[1])
             })
             
             console.log(findAverage(obj))
             process.exit();
         })
 }
 readInput();