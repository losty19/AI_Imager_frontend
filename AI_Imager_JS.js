// AI_Imager_JS.js

// Function to handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const imagePreview = document.getElementById("image-preview");
        imagePreview.style.backgroundImage = `url(${e.target.result})`;
    };

    reader.readAsDataURL(file);
}

// Function to process image using AI
function processImage() {
    // TODO: Implement AI processing logic here
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Image processing in progress...";
}

// Event listeners
document.getElementById("image-input").addEventListener("change", handleImageUpload);
document.getElementById("process-btn").addEventListener("click", processImage);

