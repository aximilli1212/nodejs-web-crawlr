const express = require('express');
const router = express.Router();

const { getIndexData } = require('../controllers/api/indexController');

router.get('/', getIndexData);

module.exports = router;