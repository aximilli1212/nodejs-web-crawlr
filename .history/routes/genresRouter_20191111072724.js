// All /genres routes

const express = require('express');
const router = express.Router();

const { getAll } = require('../controllers/crawlrController');

router.get('/', getAllGenres);

module.exports = router;