import axios from 'axios';

export default {
    getAll: function () {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCwFmrxLpgYHkrr5WXgfpbW08db9E719c8')
    } 
}