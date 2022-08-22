const express = require('express');
const router = express.Router();
const postModel = require('../models/postModel');

router.delete('/:id', async (req, res) => {
    try{
        const document = await postModel.remove({ _id: req.params.id });
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
