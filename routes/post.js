const express = require('express');
const router = express.Router();
const libraryBook = require('../models/libraryBookModel');

router.post('/', async (req, res) => {
    const post = new libraryBook({
        author: req.body.author,
        books: req.body.books
    });

    try{
        const savePost = await post.save();
    }
    catch (err) 
    {
        req.json({ 
            message: err 
        });
    }
});

module.exports = router;
