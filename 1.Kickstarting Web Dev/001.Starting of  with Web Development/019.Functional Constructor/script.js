//========== User's Code Starts Here ==========
function Person(firstName, lastName, age, sex) {
    // Initialize the properties of the person object
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;

    // Method to print full name of the person
    this.printFullName = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    };
}

// Prototype method to check if the person is eligible to enter the disco
Person.prototype.findEligibleOrNot = function (minAge) {
    // Check eligibility and print the message in the desired format
    if (this.age >= minAge) {
        console.log("ELIGIBLE");
    } else {
        console.log("NOT ELIGIBLE");
    }
};

function createNewStudents() {
    // Creating two instances of the Person object
    const person1 = new Person("yash", "prasad", 10, "M");
    const person2 = new Person("vaibhav", "prasad", 20, "M");

    // Printing full name and checking eligibility for both students
    person1.printFullName();
    person1.findEligibleOrNot(18);

    person2.printFullName();
    person2.findEligibleOrNot(18);
}

async function readInput() {
    let inputString = '';
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);
        const argumentsArr = inputArr[0].split(',');
        createNewStudents();
        process.exit();
    });
}

readInput();  // Start the function to read input and process

//========== User's Code Ends Here ==========