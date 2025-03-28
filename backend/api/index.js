// api/index.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/query', (req, res) => {
  const { query } = req.body;
  res.json({ data: `Mock response for query: ${query}` });
});

app.post('/api/explain', (req, res) => {
  const { query } = req.body;
  res.json({ explanation: `Pseudo-SQL for query: ${query}` });
});

app.post('/api/validate', (req, res) => {
  const { query } = req.body;
  res.json({ isValid: true });
});

module.exports = app;