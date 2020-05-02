const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        authors: {
            type: Array,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        image: {
            type: String,
            trim: true
        },
        link: {
            type: String,
            trim: true
        },
        title: {
            type: String,
            trim: true
        }
    }
);

const NewSavedBook = mongoose.model("NewSavedBook",bookSchema)

module.exports = NewSavedBook;