function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;  

    const obj = {
        username: username,
        email: email,
        phone: phone,
    }     

    localStorage.setItem(obj.email, JSON.stringify(obj));

    showUserOnScreen(obj);
}

function showUserOnScreen(obj) {
    const parentElement = document.querySelector('ul');

    const childElement = document.createElement('li');
    childElement.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phone;
    parentElement.appendChild(childElement);
}
module.exports = handleFormSubmit;