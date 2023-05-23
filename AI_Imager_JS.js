// JavaScript code for your frontend file

// Event listener for form submission
document.querySelector('#my-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const textInput = document.querySelector('#text-input').value;
  
    try {
      const response = await fetch('https://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `text_input=${encodeURIComponent(textInput)}`
      });
  
      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.image_url;
  
        // Display the generated image on the webpage
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.querySelector('#result').appendChild(imageElement)
        //document.body.appendChild(imageElement);
      } else {
        console.error('Image generation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
});
