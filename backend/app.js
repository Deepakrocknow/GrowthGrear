// backend/app.js
const express = require('express');
const queryRoutes = require('./routes/queryRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

app.use(express.json());
app.use(authMiddleware);

app.use('/api', queryRoutes);

module.exports = app;