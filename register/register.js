
function participantTemplate(count) {
  // Create a template string
  let template = `<div class="participant">
                    <p>Participant #${count}</p>
                  </div>`;
  
  // Return the template
  return template;
}

function submitForm(event) {
 event.preventDefault();

 // do the rest of the stuff
 }

 // Create the participant template function
function participantTemplate(count) {
    // Create a div element
    let participantDiv = document.createElement('div');
    participantDiv.classList.add('participant');
    
    // Create a paragraph element to display the participant number
    let participantText = document.createElement('p');
    participantText.textContent = `Participant #${count}`;
    
    // Append the text to the div
    participantDiv.appendChild(participantText);
    
    // Add the event listener to the div (e.g., click event)
    participantDiv.addEventListener('click', function() {
      alert(`Participant #${count} clicked!`);
    });
    
    // Return the participant div element
    return participantDiv;
  }
  
  // Example usage: Create and append participant elements to the body
  let participant1 = participantTemplate(1);
  let participant2 = participantTemplate(2);
  document.body.appendChild(participant1);
  document.body.appendChild(participant2);
element.style.display = "none";

function changeTheme() {
    if (themeSelector.value === 'dark'){
        body.classList.add("dark");
        img.src = "byui-logo_white.png"
    } else  {
        body.classList.remove('dark');
        img.src = "byui-logo_blue.webp"
    }
}
themeSelector.addEventListener('change', changeTheme);
