const mongoose = require('mongoose');

const IssuedBookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    bookId:{
        type:String,
        required:true
    },
    userName: {
        type: String,
        required: true
    },
    issueDate: {
        type: String,
        required: true
    },
    returnDate: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('issuedBooks', IssuedBookSchema)