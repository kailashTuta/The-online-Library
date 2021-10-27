const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Import Routes
const bookRoutes = require('./routes/books')
const serviceRoutes = require('./routes/services')
app.use('/books', bookRoutes)
app.use('/services', serviceRoutes)

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



