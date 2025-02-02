// script.js

// OpenAI API endpoint and API key
const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
// Replace the sample key below with your actual OpenAI API key
const API_KEY = "sk-proj-vcDuhC514r0eOPSjSBWRT3BlbkFJsimE6GcLUitN40mOyNWJ";

// DOM element references
const sendButton = document.getElementById('sendButton');
const inputText = document.getElementById('inputText');
const responseContainer = document.getElementById('responseContainer');

// Event listener for the "Send" button
sendButton.addEventListener('click', () => {
  const userInput = inputText.value.trim();

  // Validate that the text area is not empty
  if (!userInput) {
    responseContainer.textContent = "Please enter some text.";
    return;
  }

  // Inform the user that the request is being processed
  responseContainer.textContent = "Processing...";

  // Prepare the payload for the OpenAI API
  const payload = {
    model: "gpt-3.5-turbo", // or use "gpt-4" if you have access and prefer it
    messages: [
      {
        role: "system",
        content: "You are a deception detection assistant. Analyze the following statement using these guidelines: [INSERT YOUR SPECIAL INSTRUCTIONS HERE]. Also, consider this knowledge base: [INSERT SUMMARY OR DETAILS FROM UPLOADED DOCUMENTS]. Provide a deception likelihood percentage and explain your reasoning."
      },
      {
        role: "user",
        content: userInput
      }
    ],
    temperature: 0.7,
    max_tokens: 300
  };

  // Make the API call using fetch
  fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      // Check if the API returned a valid answer
      if (data.choices && data.choices.length > 0) {
        responseContainer.textContent = data.choices[0].message.content;
      } else {
        responseContainer.textContent = "No answer received from the API.";
      }
    })
    .catch(error => {
      console.error("API call failed:", error);
      responseContainer.textContent = "An error occurred while processing your request.";
    });
});

