// const db = require('../models');
const router = require('express').Router();
const axios = require('axios');
const db = require('../models');


router.post('/booksearch', (req, res) => {

    let title = encodeURI(req.body.bookTitle)

    console.log(title)

    axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyCwFmrxLpgYHkrr5WXgfpbW08db9E719c8`
    ).then(
        response => {
            // console.log(response.data)

            // handle no response 
            if (response.data.items) {
                res.json(response.data.items[0])
            } else {
                res.json({ message: 'We are unable to find this book.' })
            }

        }
    )
})

// save button 

router.post('/savebook', (req, res) => {
    const authors = req.authors
    const description = req.description
    const image = req.image
    const link = req.link
    const title = req.title
    const isbn13 = req.isbn13

    const newSavedBook = new db.NewSavedBook

    newSavedBook.authors = authors
    newSavedBook.description = description
    newSavedBook.image = image
    newSavedBook.link = link
    newSavedBook.title = title
    newSavedBook.isbn13 = isbn13

    newSavedBook.save(err => {
        if (err) {
            return res.send({
                success: false,
                message: `Please see error message: ${err}`,
            });
        }
        return res.send({
            success: true,
            message: 'You have saved a book.',
        });
    })
})

// delete button 

router.post('/deletebook', (req, res) => {

    const isbn13 = req.isbn13

    db.NewSavedBook.deleteOne({
        isbn13: isbn13
    }).then(err => {
        if (err) {
            return res.send({
                success: false,
                message: `Please see error message: ${err}`,
            });
        }
        return res.send({
            success: true,
            message: 'You have deleted a book.',
        });
    })
})

// retriveve saved 

router.post('/getsavedbooks', (req, res) => {
    db.NewSavedBook.find({})
        .then(
            data => {
                res.json(data)
            }
        ).catch(({ message }) => {
            console.log(message)
        })
})

module.exports = router;