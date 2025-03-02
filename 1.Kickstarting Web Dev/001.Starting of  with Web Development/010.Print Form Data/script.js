function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default behavior

    const form = document.getElementById("appointment-form");
    const formData = new FormData(form); // Collect form data
    const patientDetails = {};

    // Populate patient details
    formData.forEach((value, key) => {
        patientDetails[key] = value;
    });

    console.log(patientDetails); // Log form values to console
}

// Add the function to the global window object for test recognition
window.handleFormSubmit = handleFormSubmit;

// Attach event listener to the form
const form = document.getElementById("appointment-form");
form.addEventListener("submit", handleFormSubmit);