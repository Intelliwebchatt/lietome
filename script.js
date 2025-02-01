/* 
  script.js

  This script handles the button click, makes an API call to the custom AI service,
  and displays the response on the webpage.
*/

/* 
  Replace the following placeholders with your actual API endpoint URL and API key.
  For example:
    const API_ENDPOINT = "https://api.yourservice.com/analyze";
    const API_KEY = "YOUR_ACTUAL_API_KEY";
*/
const API_ENDPOINT = "https://api.example.com/your-endpoint"; // Replace with your API endpoint URL
const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your API key

// DOM element references
const sendButton = document.getElementById('sendButton');
const inputText = document.getElementById('inputText');
const responseContainer = document.getElementById('responseContainer');

// Event listener for the "Send" button
sendButton.addEventListener('click', () => {
  const text = inputText.value.trim();

  // Validate that the text area is not empty
  if (!text) {
    responseContainer.textContent = "Please enter some text.";
    return;
  }

  // Inform the user that the request is being processed
  responseContainer.textContent = "Processing...";

  // Prepare the data payload for the API request
  const payload = {
    text: text
    // Add any additional parameters required by your API here
  };

  // Make the API call using fetch
  fetch(API_ENDPOINT, {
    method: "POST", // Change to "GET" if your API requires a GET request
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}` // Adjust if your API uses a different auth header
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Assuming the API returns a JSON object with an "answer" field
      if (data.answer) {
        responseContainer.textContent = data.answer;
      } else {
        responseContainer.textContent = "No answer received from the API.";
      }
    })
    .catch(error => {
      console.error("API call failed:", error);
      responseContainer.textContent = "An error occurred while processing your request.";
    });
});
