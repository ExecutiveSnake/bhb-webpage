// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Set up CORS for all routes
app.use(cors(
  {origin: '*',}
));

// Allow requests from the specified domain
const allowedOrigins = ['http://localhost:3001', 'http://localhost:3000']; // Add other allowed domains as needed

app.use(
  cors({
    origin: (origin, callback) => {
      // Check if the request's origin is in the allowedOrigins array
      const isAllowed = allowedOrigins.includes(origin);
      callback(null, isAllowed);
    },
  })
);

// Your API routes and other middleware go here...

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api-mainnet.magiceden.dev/v2/collections/bigheadbillions/listings', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
