# Movie Recommendation Chatbot

A simple chatbot application that provides movie recommendations based on diary entries using the Hugging Face Transformers API.

## Features

- Accepts diary entries from users.
- Generates movie recommendations based on the content of the diary entry.
- Built with Node.js for the backend and HTML/JavaScript for the frontend.

## Technologies Used

- **Backend**: Node.js, Express, Hugging Face Transformers
- **Frontend**: HTML, JavaScript
- **Middleware**: CORS for handling cross-origin requests

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
Install Dependencies

Make sure you have Node.js installed. Then, run:

bash
Copy code
npm install
Set Up Your API Key

Replace the placeholder in your index.js file with your Hugging Face API key.

javascript
Copy code
const HUGGING_FACE_API_KEY = 'your_api_key_here';
Run the Server

Start the Node.js server:

bash
Copy code
node index.js
Open the Frontend

Open index.html in your web browser to access the chatbot interface.

