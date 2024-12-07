const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    bname: String, 
    author: String,
    lang: String,
    title: {
        type: String
    },
    price : {
        type: Number
    },
    year :{
        type: Number
    },
    page :{
        type: Number
    }, 
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;