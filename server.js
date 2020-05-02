const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 9999;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: ['application/json'] }));

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/_______",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

// https://www.googleapis.com/books/v1/volumes?q=search+terms
// AIzaSyCwFmrxLpgYHkrr5WXgfpbW08db9E719c8

app.get(
    '/api/test',
    (req, res) => {
        console.log(req);
        res.json(
            [{"hi":"hello"}]
        )
        }
);

// app.use('/',routerHtml);
// app.use('/api',routerApi);

app.listen(
    PORT,
    () => console.log(`I hope you have a wonderful day on port ${PORT}!`)
);











