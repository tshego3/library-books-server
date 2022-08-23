const express = require('express');
const router = express.Router();
const libraryBook = require('../models/libraryBookModel');

router.delete('/:id', async (req, res) => {
    try{
        const document = await libraryBook.remove({ _id: req.params.id });
        res.json(document);
    }
    catch (err) 
    {
        req.json({ 
            message: err 
        });
    }
});

module.exports = router;
