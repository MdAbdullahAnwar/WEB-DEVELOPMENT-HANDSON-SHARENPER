const heading3 = document.createElement('h3');

heading3.appendChild(document.createTextNode("Buy high quality organic fruits online"));

const heading = document.querySelector("#header");

heading.appendChild(heading3);

// -----------------------------------------
heading3.style.fontStyle = "italic";
// -----------------------------------------

const divs = document.getElementsByTagName("div");
const secondDiv = divs[1];

const para = document.createElement("p");
para.appendChild(document.createTextNode("Total fruits:4"));

const fruits = document.querySelector("fruits");

secondDiv.insertBefore(para, fruits);

para.id = "fruits-total";