const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Hugging Face API Endpoint
const HF_API_URL = 'https://api-inference.huggingface.co/models/gpt2';

app.post('/recommend', async (req, res) => {
    const diaryEntry = req.body.entry;

    try {
        const response = await fetch(HF_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inputs: diaryEntry }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const generatedText = data[0]?.generated_text || "Sorry, I couldn't generate a recommendation.";

        res.json({ movie: generatedText });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
