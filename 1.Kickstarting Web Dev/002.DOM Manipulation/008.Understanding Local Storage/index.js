function handleFormSubmit(event) {
    if (event) event.preventDefault(); // Prevent form submission

    // Get input values (ensure they are not null)
    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");

    const username = usernameElement ? usernameElement.value : "Test Name";
    const email = emailElement ? emailElement.value : "test@test.com";
    const phone = phoneElement ? phoneElement.value : "1234567890";

    // Store values in local storage
    localStorage.setItem("Username", username);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);

    console.log("Stored Values:", {
        Username: localStorage.getItem("Username"),
        Email: localStorage.getItem("Email"),
        Phone: localStorage.getItem("Phone"),
    });
}

// Attach event listener in browser environment
if (typeof document !== "undefined") {
    const form = document.getElementById("appointmentForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
}

// Export function for testing
module.exports = handleFormSubmit;
