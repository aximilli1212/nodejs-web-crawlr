// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter');
const crawlrRouter = require('./crawlrRouter');

router.use('/', indexRouter);
router.use('/genres', crawlrRouter);

module.exports = router;
