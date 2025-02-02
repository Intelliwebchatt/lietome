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

  // Prepare the payload using your custom assistant "lie to me"
  const payload = {
    model: "lie to me", // Use the model name as set in your dashboard
    messages: [
      {
        role: "system",
        content: "You are a deception detection assistant based on scientific principles and advanced AI. Your task is to analyze a given message for signs of deception. Identify where in the message deception is suspected, explain why, and provide a percentage likelihood of deception. Additionally, suggest follow-up questions to further clarify the message and improve accuracy. Your analysis should help the user determine the truth and teach them how to recognize deception."
      },
      {
        role: "user",
        content: userInput
      }
    ],
    temperature: 0.7,
    max_tokens: 300
  };

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
