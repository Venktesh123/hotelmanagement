// index.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000

// MongoDB connection URI from environment variable
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('MongoDB URI not found in .env file');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('<h1>Hello World! Venktesh</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
