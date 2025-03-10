function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = {
        username,
        email,
        phone
    }

    localStorage.setItem(obj.email, JSON.stringify(obj));

    showUserOnScreen(obj);
}

function showUserOnScreen(obj) {
    const parentElement = document.querySelector('ul');
    const childElement = document.createElement('li');
    childElement.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phone;
    parentElement.appendChild(childElement);

    //------------------------------------------

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentElement.removeChild(childElement);
    }

    //------------------------------------------

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    editButton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentElement.removeChild(childElement);

        document.getElementById('username').value = obj.username;
        document.getElementById('email').value = obj.email;
        document.getElementById('phone').value = obj.phone;
    }

    //------------------------------------------

    childElement.appendChild(deleteButton);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);
}
module.exports = handleFormSubmit;
