const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')



// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log('Connected to DB!')
    }
);

app.listen(5000);



