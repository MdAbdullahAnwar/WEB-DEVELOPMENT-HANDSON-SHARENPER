document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class "fruit"
    const listItems = document.getElementsByClassName("fruit");

    // Change the background color of the third list item to yellow
    listItems[2].style.backgroundColor = "yellow";

    // Make all list items bold
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.fontWeight = "bold";
    }
});
