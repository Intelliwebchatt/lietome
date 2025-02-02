/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Apply modern fonts */
body {
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #2b5876, #4e4376);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

/* Header styling */
header {
  text-align: center;
  padding: 2rem 1rem;
}

header h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.2rem;
  opacity: 0.9;
}

/* Main container styling */
main {
  width: 90%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}

/* App container styling */
.app-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

textarea {
  width: 100%;
  height: 120px;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  outline: none;
}

button {
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background-color: #ff6f61;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ff8a80;
}

.response {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  min-height: 60px;
}

/* Information section styling */
.info {
  text-align: center;
  margin: 1.5rem 0;
  font-size: 1rem;
}

/* Footer styling */
footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;
  opacity: 0.8;
}

