// 1. Change the main heading 'Fruit Shop' to 'Fruit World'
document.getElementById('main-heading').textContent = 'Fruit World';


// 2. Change the font color of 'Fruit World' from black to orange
document.getElementById('main-heading').style.color = 'orange';


// 3. Change the background color of div with id = "header" to green color
document.getElementById('header').style.backgroundColor = 'green';


// 4. Add a bottom border of orange color to div with id = "header"
document.getElementById('header').style.borderBottom = '4px solid orange';


// 5. Change the font color of 'Fruits In Basket' from black to green
document.getElementById('basket-heading').style.color = 'green';


// 6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
const thanksDiv = document.getElementById('thanks');
const paragraph = document.createElement('p');
paragraph.textContent = 'Please visit us again';
thanksDiv.appendChild(paragraph);