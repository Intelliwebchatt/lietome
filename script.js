// script.js

// OpenAI API endpoint and API key
const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
// Replace with your full API key (should start with "sk-")
const API_KEY = "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";

// DOM element references
const sendButton = document.getElementById('sendButton');
const inputText = document.getElementById('inputText');
const responseContainer = document.getElementById('responseContainer');

// Event listener for the "Analyze" button
sendButton.addEventListener('click', () => {
  const userInput = inputText.value.trim();

  if (!userInput) {
    responseContainer.textContent = "Please enter some text.";
    return;
  }

  responseContainer.textContent = "Processing...";

  // Prepare the payload for your custom assistant
  const payload = {
    // Use your custom assistant's unique identifier
    model: "asst_YMxp7qpWghfjFFyV6hofZpmv",
    messages: [
      // The system instructions you see in the dashboard will be used by your assistant.
      // You can optionally include additional context here.
      {
        role: "system",
        content: "Forensic AI Deception Analyzer. Your role is to analyze messages for deception using forensic linguistics, cognitive load analysis, and behavioral cues. Provide a detailed analysis including deception markers, a deception score (0-100%), and suggested follow-up questions."
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
