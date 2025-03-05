//========== User's Code Starts Here ==========
class Student {
    constructor(firstName, lastName, rollNumber, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNumber = rollNumber;
        this.age = age;
    }

    // Method to print full name of the student
    printFullName() {
        console.log(`${this.firstName}${this.lastName}`);
    }

    // Method to check if the student is major or minor
    minorOrMajor() {
        if (this.age >= 18) {
            console.log("Major");
        } else {
            console.log("Minor");
        }
    }
}

// Function to create new students and test the methods
function createNewStudents() {
    // Creating student objects with the given details
    const yash = new Student('yash', 'prasad', 12, 27);
    const ram = new Student('ram', 'prasad', 14, 15);

    // Testing Yash's full name and age category
    yash.printFullName();
    yash.minorOrMajor();

    // Testing Ram's full name and age category
    ram.printFullName();
    ram.minorOrMajor();
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