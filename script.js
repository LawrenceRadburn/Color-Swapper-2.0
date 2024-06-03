const button = document.getElementById("button");
const inputBox = document.getElementById("input");
const background = document.getElementById("background");

function changeColor(input) {
    const color = input.target.value.toLowerCase();
    if (color === "blue") {
        wrapper.style.backgroundColor = "blue";
        background.innerText += " Blue"
        }
    if (color === "red") {
        wrapper.style.backgroundColor = "red";
        background.innerText += " Red"
        }
    if (color === "green") {
        wrapper.style.backgroundColor = "green";
        background.innerText += " Green"
        }
    if (color === "purple") {
        wrapper.style.backgroundColor = "purple";
        background.innerText += " Purple"
        }
    if (color === "pink") {
        wrapper.style.backgroundColor = "pink";
        background.innerText += " Pink"
        }
    if (color === "orange") {
        wrapper.style.backgroundColor = "orange";
        background.innerText += " Orange"
        }
    if (color === "black") {
        wrapper.style.backgroundColor = "black";
        background.innerText += " Black"
        }
}

inputBox.addEventListener("input", changeColor);
