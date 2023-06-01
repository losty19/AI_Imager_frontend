// JavaScript code for your frontend file

function adjustTextareaHeight() {
  const textarea = document.querySelector('#text-input');
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
}
// Event listener for textarea input
document.querySelector('#text-input').addEventListener('input', adjustTextareaHeight);

// Event listener for form submission
document.querySelector('#my-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const textInput = document.querySelector('#text-input').value;
  
    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `text_input=${encodeURIComponent(textInput)}`
      });
  
      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.image_url;
        const prompt = data.prompt;

        // Display the generated image on the webpage
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        const promptElement = document.createElement('p');
        promptElement.textContent = `Prompt: ${prompt}`;

        const resultContainer = document.querySelector('#result');
        resultContainer.appendChild(imageElement);
        resultContainer.appendChild(promptElement);

      } else {
        console.error('Image generation failed');
      }
    } catch (error) {
      displayErrorMessage("An error occured. Please try again. ")
      console.error('Error:', error);
    }
});

function displayErrorMessage(message) {
  // Get a reference to the error message element in your HTML
  const errorMessageElement = document.getElementById("error-message");

  // Update the error message text
  errorMessageElement.textContent = message;

  // Display the error message element
  errorMessageElement.style.display = "block";
}

// Close button for error message
$(document).ready(function() {
  $('.close-button').click(function() {
    $('#error-message').hide();
  });
});
