//========== User's Code Starts Here ==========
class User {
    static count = 0;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        User.count++;
    }

    printNumberOfUsers() {
        console.log("currentnumberofusers =", User.count);
    }
}

class Member extends User {
    constructor(username, email, password) {
        super(username, email, password); // Call the parent class constructor
        this.membershipactivetilldate = new Date(2023, 2, 3); // 3rd March 2023
        this.package = '';
    }

    // Purchase membership and extend validity based on the package
    purchaseMembership(membershippackagename) {
        this.package = membershippackagename;

        if (membershippackagename === "MONTHLYPACKAGE") {
            // Add 1 month to the membership end date
            this.membershipactivetilldate.setMonth(this.membershipactivetilldate.getMonth() + 1);
        } else if (membershippackagename === "YEARLYPACKAGE") {
            // Add 1 year to the membership end date
            this.membershipactivetilldate.setFullYear(this.membershipactivetilldate.getFullYear() + 1);
        }
    }

    // Print subscription details
    subscriptionActiveTill() {
        console.log(
            this.username +
            " is subscribed to " +
            this.package +
            " uptill " +
            this.membershipactivetilldate.toDateString()
        );
    }
}

function createNewStudents(username, email, password, membershippackagename) {
    const member = new Member(username, email, password); // Create a new Member object
    member.purchaseMembership(membershippackagename); // Purchase a membership
    member.subscriptionActiveTill(); // Print subscription details
}

// Simulated input for testing
async function readInput() {
    let inputString = '';
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g);
        const argumentsArr = inputArr[0].split(',');
        createNewStudents(argumentsArr[0], argumentsArr[1], argumentsArr[2], argumentsArr[3]);
        process.exit();
    });
}

readInput(); // Start the function to read input and process

//========== User's Code Ends Here ==========