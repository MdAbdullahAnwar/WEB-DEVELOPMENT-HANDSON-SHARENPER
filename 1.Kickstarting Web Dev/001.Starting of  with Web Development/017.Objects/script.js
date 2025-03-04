

//========== User's Code Starts Here ==========
var printObject = (arr) => {
    const person = {
        age: 26,
        firstName: "Yash",
        lastName: "Prasad",
        hobbies: ['music', 'movies', 'sports'],
        address: {
            street: '50 main street',
            city: 'BLR',
            state: 'Karnataka'
        }
    }

    // In the person object, print 2nd hobby = "movies" from the hobbies
    console.log("Person's 2nd hobby = ", person.hobbies[1]); // Accessing the second element in the hobbies array

    // In the person object, print the "state" value from the address key
    console.log("Person's state = ", person.address.state); // Accessing state from the address key

    // Take out the age and city from the person object using destructuring and console log
    const { age, address: { city } } = person; // Destructuring to extract age and city
    console.log("Person's age = ", age);
    console.log("Person's city = ", city);
}

async function readInput() {
    let inputString = '';
    var output = [];
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
        output = printObject(inputArr[0]);
        process.exit();
    })
}

readInput();

//========== User's Code Ends Here ==========

