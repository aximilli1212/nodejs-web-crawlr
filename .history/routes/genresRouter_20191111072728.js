// All /genres routes

const express = require('express');
const router = express.Router();

const { getC } = require('../controllers/crawlrController');

router.get('/', getAllGenres);

module.exports = router;