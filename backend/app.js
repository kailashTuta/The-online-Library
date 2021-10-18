const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')


// Import Routes
const bookRoutes = require('./routes/books')

app.use('/books', bookRoutes)

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log('Connected to DB!')
    }
);

app.listen(5000);



