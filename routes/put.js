const express = require('express');
const router = express.Router();
const postModel = require('../models/postModel');

router.patch('/:id', async (req, res) => {
    try{
        const document = await postModel.updateOne(
            { _id: req.params.id },
            { $set: { author: req.body.author } }
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
