// const db = require('../models');
const router = require('express').Router();
const axios = require('axios');
const db = require('../models/index');


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
    
    // console.log(req.body)
    
    const authors = req.body.authors
    const description = req.body.description
    const image = req.body.image
    const link = req.body.link
    const title = req.body.title
    const isbn13 = req.body.isbn13

    
    db.SavedBook.find(
        {
            isbn13: isbn13
        },
        (err,bookExists) => {
            if (err) {
                return res.send({
                    success: false,
                    message: `ERROR: ${err}`
                })
            } else if (bookExists.length > 0) {
                return res.send({
                    success: false,
                    message: 'This book has already been added!'
                })
            } else {
                
                const newSavedBook = new db.SavedBook();

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
                            message: `ERROR: ${err}`,
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'You have saved a book.',
                    });
                })
            }
        }
    )
})

// delete button 

router.post('/deletebook', (req, res) => {

    const isbn13 = req.body.isbn13

    console.log('this should be the isbn', isbn13)

    db.SavedBook.deleteOne({
        isbn13: isbn13
    }).then((err,results)=> {
        // if (err) {
        //     return res.send({
        //         success: false,
        //         message: `Something went wrong...`,
        //     });
        // }
        return res.send({
            success: true,
            message: 'You have deleted a book.',
        });
    })
})

// retriveve saved 

router.get('/getallsaved', (req, res) => {
    
    console.log('here as well')
    
    db.SavedBook.find({})
        .then(
            data => {
                res.json(data)
            }
        ).catch(({ message }) => {
            console.log(message)
        })
})

module.exports = router