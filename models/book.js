const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        authors: {
            type: Array,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        publicationDate: {
            type: String,
            trim: true
        },
        title: {
            type: String,
            trim: true
        },
        category: {
            type: String,
            trim: true
        }, 
        image: {
            type: String
        },
        link: {
            type: String
        },
        isbn13: {
            type: String
        }
    }
);

const SavedBook = mongoose.model("SavedBook",BookSchema)

module.exports = SavedBook;