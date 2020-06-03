import axios from 'axios';

export default {

    // getAll: function () {

    //     return axios.get(
    //         '/api/test',
    //         {}
    //     )
    // },

    searchTitle: function (title) {

        //should only take in name of book and send it to the back end 

        return axios.post('/api/booksearch', {
            bookTitle: title
        })
    },

    saveBook: function (authors, description, image, link, title, isbn) {
        return axios.post(
            '/api/savebook',
            {
                authors: authors,
                description: description,
                image: image,
                link: link,
                title: title,
                isbn13: isbn,
            }
        )
    },

    deleteBook: function (isbn) {
        return axios.post(
            '/api/deletebook',
            {
                isbn13: isbn,
            }
        )
    },

    retrieveSavedBooks: function (req) {
        return axios.get(
            '/api/getallsaved',
            req
        )
    }
}