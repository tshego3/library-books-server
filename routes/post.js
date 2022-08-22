const express = require('express');
const router = express.Router();
const postModel = require('../models/postModel');

router.post('/', (req, res) => {
    res.send('Hello world!');
});

module.exports = router;
