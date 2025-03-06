// Write answer to the questions asked below:
const basketHeading = document.querySelector("#basket-heading");

basketHeading.style.color = "brown";

const fruitItems = document.querySelectorAll(".fruit");

for (let i = 0; i < fruitItems.length; i++)
{
    if (i % 2 !== 0)
    {
        fruitItems[i].style.backgroundColor="brown";
        fruitItems[i].style.color="white";
    }
}