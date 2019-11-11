const express = require('express');
const router = express.Router();

const { getCrawlr } = require('../controllers/crawlrController');

router.get('/api', getCrawlr);
router.get('/api', getCrawlr);

module.exports = router;