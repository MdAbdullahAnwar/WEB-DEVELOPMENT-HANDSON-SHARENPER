document.addEventListener('DOMContentLoaded', function () {
    const fruitList = document.querySelector('.fruits');
    const fruitInput = document.querySelector('#fruit-to-add');
    const fruitForm = document.querySelector('form');

    // Add an edit button to each existing fruit item
    const existingFruits = fruitList.querySelectorAll('li');
    existingFruits.forEach(fruit => {
        addEditButton(fruit);
    });

    // Function to create edit button
    function addEditButton(li) {
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);
    }

    // Function to handle form submission
    fruitForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newFruit = fruitInput.value.trim();
        if (newFruit) {
            addFruitToList(newFruit);
            fruitInput.value = '';
        }
    });

    // Function to add new fruit to the list with delete and edit buttons
    function addFruitToList(fruit) {
        const li = document.createElement('li');
        li.className = 'fruit';
        li.textContent = fruit;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'x';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        fruitList.appendChild(li);
    }

    // Function to handle delete and edit button clicks
    fruitList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            const li = e.target.parentElement;
            fruitList.removeChild(li);
        } else if (e.target.classList.contains('edit-btn')) {
            const li = e.target.parentElement;
            const newFruit = prompt("Edit fruit:", li.firstChild.textContent);
            if (newFruit !== null && newFruit.trim() !== "") {
                li.firstChild.textContent = newFruit.trim();
            }
        }
    });
});
