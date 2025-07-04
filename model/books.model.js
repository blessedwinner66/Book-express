const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        publishedYear:{
            type:Number,
            required:true
        },
        genre:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
    }
)

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;