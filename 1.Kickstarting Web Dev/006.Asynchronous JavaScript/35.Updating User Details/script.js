const axios = require("axios");

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const userId = event.target.dataset.userId || null; // Check if updating an existing user

    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };

    try {
        let response;
        if (userId) {
            // If userId exists, post as a new user (edit case)
            response = await axios.post(
                "https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData",
                userDetails
            );
        } else {
            // Otherwise, create a new user with a POST request
            response = await axios.post(
                "https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData",
                userDetails
            );
        }

        displayUserOnScreen({ ...response.data, _id: response.data._id });

        // Clear the form and remove userId tracking
        event.target.reset();
        delete event.target.dataset.userId;
    } catch (error) {
        console.log("Error handling form submission:", error);
    }
}

function displayUserOnScreen(userDetails) {
    const userList = document.querySelector("ul");

    const userItem = document.createElement("li");
    userItem.dataset.userId = userDetails._id; // Store user ID for tracking

    userItem.appendChild(
        document.createTextNode(
            `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
        )
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);

    userList.appendChild(userItem);

    // Delete functionality with axios.delete()
    deleteBtn.addEventListener("click", async function (event) {
        try {
            await axios.delete(
                `https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData/${userDetails._id}`
            );
            userList.removeChild(event.target.parentElement);
        } catch (error) {
            console.log("Error deleting user:", error);
        }
    });

    // Edit functionality
    editBtn.addEventListener("click", async function (event) {
        try {
            // Delete the existing user from the database
            await axios.delete(
                `https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData/${userDetails._id}`
            );

            // Populate input fields with existing user details
            document.getElementById("username").value = userDetails.username;
            document.getElementById("email").value = userDetails.email;
            document.getElementById("phone").value = userDetails.phone;

            // Track user ID in form for re-saving
            document.querySelector("form").dataset.userId = userDetails._id;

            // Remove the existing user from UI
            userList.removeChild(event.target.parentElement);
        } catch (error) {
            console.log("Error editing user:", error);
        }
    });
}

// Do not touch code below
module.exports = handleFormSubmit;