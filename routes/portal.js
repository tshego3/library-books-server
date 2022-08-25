const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/portal', (req, res) => {
    try{
        res.sendFile(path.join(__dirname + '/index.html'));
    }
    catch (err) 
    {
        req.json({ 
            message: err 
        });
    }
});

module.exports = router;
