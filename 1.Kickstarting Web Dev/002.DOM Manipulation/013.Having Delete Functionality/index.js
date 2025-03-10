function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = {
        username,
        email,
        phone,
    }

    localStorage.setItem(obj.email, JSON.stringify(obj));
    //console.log(event.target.username.value);
    showUserOnScreen(obj);

}

function showUserOnScreen(obj) {
    const parentElement = document.getElementById('listOfItems');

    const childElement = document.createElement('li');
    childElement.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phone;

    const deleteButton = document.createElement('button')
    //'input'
    //deleteButton.type = "button"
    //deleteButton.value = 'Delete'
    deleteButton.textContent = 'Delete';

    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentElement.removeChild(childElement);
    }

    childElement.appendChild(deleteButton);
    parentElement.appendChild(childElement);
}

module.exports = handleFormSubmit;