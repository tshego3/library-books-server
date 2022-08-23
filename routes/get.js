const express = require('express');
const router = express.Router();
const libraryBook = require('../models/libraryBookModel');

router.get('/', async (req, res) => {
    try{
        const documents = await libraryBook.find();
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
        const document = await libraryBook.findById(req.params.id);
        res.json(document);
    }
    catch (err) 
    {
        req.json({ 
            message: err 
        });
    }
});

// router.get('/', (req, res) => {
//     res.send('Hello world!');
// });

module.exports = router;
