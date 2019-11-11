// All /genres routes

const express = require('express');
const router = express.Router();

const { getCrawlr } = require('../controllers/crawlrController');

router.get('/', getCrawlr);

module.exports = router;