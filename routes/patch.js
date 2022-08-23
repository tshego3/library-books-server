const express = require('express');
const router = express.Router();
const libraryBook = require('../models/libraryBookModel');

router.patch('/:id', async (req, res) => {
    try{
        const document = await libraryBook.updateOne(
            { _id: req.params.id },
            { $set:
                {
                    author: req.body.author,
                    books: req.body.books
                }    
            }
        );
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
