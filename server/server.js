//dependencies 
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');
const PORT = 4005; 

//configure / middleware
require('dotenv').config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //check

// app.use(express.static(__dirname + '/html/'));

//require controllers 
const booksController = require('./controllers/books_controller'); 

app.use('/api/books', booksController); // NOTE: important to add /api before books bc eventually this express server will host our server and better to prepend

// // catch-all route handler for any requests to an unknown route
// app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// /**
//  * express error handler
//  * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
//  */

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

//listen to server (createReact app runs on 3000 so want to pick sth different)
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

