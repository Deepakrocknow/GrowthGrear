// backend/routes/queryRoutes.js
const express = require('express');
const { query, explain, validate } = require('../controllers/queryController');

const router = express.Router();

router.post('/query', query);
router.post('/explain', explain);
router.post('/validate', validate);

module.exports = router;