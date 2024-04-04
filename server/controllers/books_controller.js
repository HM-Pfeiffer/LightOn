const books = require('express').Router();
const db = require('../models');
const { Book } = db; 

//get all books 
books.get('/', async (req, res) => {
    try {
        const foundBooks = await Book.findAll(); 
        console.log("NOW IN THE BOOKS GET COntroLLER")
        res.status(200).json(foundBooks);      //later modify to move this to a route folder 
    } catch (err) { //later refactor to use global error handler to deal with these 
        console.log("NOW ABOUT TO GET ERROR IN THE BOOKS GET COntroLLER")
        res.status(500).send('Server error'); 
        console.log(err); 
    }
})

module.exports = books;