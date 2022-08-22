const express = require('express');
const router = express.Router();
const postModel = require('../models/postModel');

router.post('/', async (req, res) => {
    const post = new postModel({
        author: req.body.author
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
