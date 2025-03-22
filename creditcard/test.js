// Select the container where the button will be added
let container = document.getElementById("container");

// Create a new button element
let newButton = document.createElement("button");

// Add text to the button
newButton.textContent = "Click Me!";

// Set an attribute (optional)
newButton.setAttribute("class", "dynamic-btn");

// Append the button to the container
container.appendChild(newButton);
