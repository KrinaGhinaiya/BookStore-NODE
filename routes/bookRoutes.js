const express = require('express');
const Book = require('../model/book.model');
const bookRoutes = express.Router();

bookRoutes.get('/', async(req, res)=>{
    let books = await Book.find();
    return res.render('book', {books});
})

bookRoutes.post('/addBook', async(req, res)=>{
    console.log(req.body);
    let newBook = await Book.create(req.body);
    if(newBook){
        console.log('New Book Add!');
        return res.redirect('/book');
    }else{
        console.log('Somthing Wrong...');
        return res.redirect('/book');
    }
});

bookRoutes.get('/deleteBook/:id', async(req, res)=>{

    let rec = await Book.findById(req.params.id);
    if(rec){
        await Book.findByIdAndDelete(req.params.id);
        console.log('Delete Record Success');
        return res.redirect('/book');
    }
    else{
        console.log("Sometghing wrong");
        return res.redirect("/book");
    }
});

bookRoutes.get("/editBook/:id", async(req, res)=>{
    let rec = await Book.findById(req.params.id);
    if(rec){
        return res.render('editBook', {book: rec})
    }
    else{
        console.log("Sometghing wrong");
        return res.redirect("/book");
    }
});

bookRoutes.post('/updateBook/:id', async(req, res) => {
    let rec = await Book.findById(req.params.id);
    if(rec){
            await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
            console.log('Update Record Success');
            return res.redirect('/book');
    }else{
        console.log('Something Wrong');
        return res.redirect('back');
    }
})

module.exports = bookRoutes;