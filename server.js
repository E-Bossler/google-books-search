const express = require('express');
const mongoose = require('mongoose');
const routerApi = require('./routes/api-routes')

const app = express();

const PORT = process.env.PORT || 9999;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ type: ['application/json'] }));

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/books",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

// https://www.googleapis.com/books/v1/volumes?q=search+terms
// AIzaSyCwFmrxLpgYHkrr5WXgfpbW08db9E719c8

// app.get(
//     '/api/test',
//     (req, res) => {
//         res.json(
//             [{"hi":"Hello World! We have front-end and back-end communication!"}]
//         )
//         }
// );

// FOR PRODUCTION WE NEED THE FOLLOWING UNCOMMENTED

// ********************************************************************************

const path = require("path");

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// ********************************************************************************


// app.use('/',routerHtml);
app.use('/api',routerApi);

app.listen(
    PORT,
    () => console.log(`I hope you have a wonderful day on port ${PORT}!`)
);











