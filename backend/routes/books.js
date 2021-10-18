const express = require('express');
const router = express.Router()
const Book = require('../models/Book')

router.get('/', (req, res) => {
    res.send('We are on books');
})



module.exports = router;
