// JavaScript code for your frontend file

// Event listener for form submission
document.querySelector('#my-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const textInput = document.querySelector('#text-input').value;
  
    try {
      const response = await fetch('/AI_Imager_frontend', {
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
        document.body.appendChild(imageElement);
      } else {
        console.error('Image generation failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
});
  


/*   *** BELOW IS OLD CODE ***

// AI_Imager_JS.js

// Function to handle image upload
function handleTextInput() {
    const textInput = document.getElementById("text-input").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Text Input: ${textInput}`;
}

// Function to process image using AI
async function processText() {
    // TODO: Implement AI processing logic here

    const resultDiv = document.getElementById("result");

    const apiKey = "";
    const prompt = 'Image based on text: ${textInput}';
    
    const response = await fetch("https://api.openai.com/v1/images", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ${apiKey}'
        },
        body: JSON,stringify({
            prompt: prompt
        })
    });

    const responseData = await response.json();
    const imageSrc = responseData?.images?.[0]?.image?.url;

    if (imageSrc) {
        resultDiv.innerHTML = `<img src="${imageSrc}" alt="Generated Image">`;
    } else {
        resultDiv.textContent = "Image generation failed.";
    }

    
    //resultDiv.textContent = "Text processing in progress...";
}

// Event listeners
document.getElementById("text-input").addEventListener("input", handleTextInput);
document.getElementById("process-btn").addEventListener("click", processText);

*/