const express = require('express');
const router = express.Router();

const { getCrawlr } = require('../controllers/crawlrController');
const { postCrawlr } = require('../controllers/crawlrController');

router.get('/', getCrawlr);
router.post('/api', postCrawlr);

module.exports = router;