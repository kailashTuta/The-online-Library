const express = require('express');
const router = express.Router()
const Book = require('../models/Book')

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    }
    catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        isbn: req.body.isbn,
        pageCount: req.body.pageCount,
        publishedDate: req.body.publishedDate,
        thumbnailUrl: req.body.thumbnailUrl,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        status: req.body.status,
        authors: req.body.authors,
        categories: req.body.categories
    });

    try {
        const savedBook = await book.save();
        res.json(savedBook);
    }
    catch (err) {
        res.json({ message: err })
    }

})



module.exports = router;
