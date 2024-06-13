const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

app.get('/login', (req, res) => {
  // Logic for handling OpenID authentication
  res.json({ message: "Login endpoint" });
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
