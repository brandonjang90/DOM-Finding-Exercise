// 1. Select the section with an id of container without using querySelector.
document.getElementById('container')

// 2. Select the section with an id of container using querySelector.
document.querySelector('#container')

// 3. Select all of the list items with a class of “second”.
document.getElementsByClassName("second")
document.querySelectorAll('.second')

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelectorAll('second')

// 5. Give the section with an id of container the text “Hello!”.
const section = document.querySelector('#container');
section.innerText = "Hello";

// 6. Add the class main to the div with a class of footer.
const footer = document.getElementsByClassName('footer');
footer.classList.add("main");

// 7. Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 8. Create a new li element.
const li = document.createElement("li");

// 9. Give the li the text “four”.
li.innerText = "four"

// 10. Append the li to the ul element.
ul.appendChild(li);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
function giveColor(){
    const list = document.querySelectorAll('ol');
}
for (let li of list) {
    li.style.backgroundColot = "green"
}
// 12. Remove the div with a class of footer
let footer = document.querySelector(".footer");
footer.remote();