function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = {
        username: username,
        email: email,
        phone: phone
    }

    localStorage.setItem("User Details", JSON.stringify(obj));
}
module.exports = handleFormSubmit;