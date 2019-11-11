const express = require('express');
const router = express.Router();

const { getCrawlr,postCrawlr } = require('../controllers/crawlrController');

router.get('/', getCrawlr);
router.post('/post', postCrawlr);

module.exports = router;