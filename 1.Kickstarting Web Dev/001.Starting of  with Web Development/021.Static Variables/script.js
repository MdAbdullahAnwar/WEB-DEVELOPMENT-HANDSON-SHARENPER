//========== User's Code Starts Here ==========
class User {
    // Declare a static variable to keep track of the number of users
    static userCount = 0;

    // Constructor to initialize username, email, and password
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;

        // Increment the static user count every time a new user is created
        User.userCount++;
    }

    // Method to print the number of users
    printNumberOfUsers() {
        console.log(`currentnumberofusers = ${User.userCount}`);
    }
}

function createNewStudents() {
    // Create new users and print the user count
    const yash = new User("yash", "yash@gmail.com", '100000xbasbcjsa');
    yash.printNumberOfUsers();  // Prints: Number of users registered: 1

    const user2 = new User("vaibhav", "vaibhav@gmail.com", '2cs0');
    user2.printNumberOfUsers();  // Prints: Number of users registered: 2

    yash.printNumberOfUsers();  // Prints: Number of users registered: 2 (should remain the same)
}

async function readInput() {
    let inputString = '';
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);
        // Create new students (users)
        createNewStudents();
        process.exit();
    });
}

readInput();  // Start the function to read input and process

//========== User's Code Ends Here ==========