const mongoose = require('mongoose');

const LibraryBookSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    books: [
        { 
            title: String, 
            year: Number
        }
    ]
});

module.exports = mongoose.model('LibraryBooks', LibraryBookSchema);
