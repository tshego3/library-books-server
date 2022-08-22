const express = require('express');
const router = express.Router();
const postModel = require('../models/postModel');

router.get('/get', async (req, res) => {
    try{
        const documents = await postModel.find();
        res.json(documents);
    }
    catch (err) 
    {
        req.json({ 
            message: err 
        });
    }
});

router.get('/:id', async (req, res) => {
    try{
        const document = await postModel.findById(req.params.id);
        res.json(document);
    }
    catch (err) 
    {
        req.json({ 
            message: err 
        });
    }
});

router.get('/', (req, res) => {
    res.send('Hello world!');
});

module.exports = router;
