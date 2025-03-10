document.addEventListener('DOMContentLoaded', function () {
    // Add input element inside form, before button, to take fruit description
    const form = document.querySelector('form');
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.name = 'description';
    descriptionInput.id = 'description';
    descriptionInput.placeholder = 'Description';
    form.insertBefore(descriptionInput, form.querySelector('button'));

    // Add fruit with description to the list
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const fruitName = document.getElementById('fruit-to-add').value;
        const fruitDescription = document.getElementById('description').value;

        // Ensure the fruit has a description
        if (!fruitDescription.trim()) {
            alert('Please enter a description for the fruit.');
            return;
        }

        const fruitList = document.querySelector('ul.fruits');
        const newFruitItem = document.createElement('li');
        newFruitItem.className = 'fruit';

        const fruitText = document.createElement('span');
        fruitText.textContent = fruitName;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'x';

        const fruitDescPara = document.createElement('p');
        fruitDescPara.style.fontStyle = 'italic';
        fruitDescPara.textContent = fruitDescription;

        newFruitItem.appendChild(fruitText);
        newFruitItem.appendChild(deleteButton);
        newFruitItem.appendChild(fruitDescPara);

        fruitList.appendChild(newFruitItem);
    });

    // Create a filter that shows only those fruits whose either name or description or both matches the entered text
    const filterInput = document.getElementById('filter');
    filterInput.addEventListener('keyup', function (e) {
        const searchText = e.target.value.toLowerCase();
        const fruitItems = document.getElementsByClassName('fruit');

        Array.from(fruitItems).forEach(function (item) {
            const fruitName = item.querySelector('span').textContent.toLowerCase();
            const fruitDescription = item.querySelector('p').textContent.toLowerCase();

            if (fruitName.indexOf(searchText) !== -1 || fruitDescription.indexOf(searchText) !== -1) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
