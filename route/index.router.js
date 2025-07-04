const express = require('express');
const router = express.Router();
const Book = require('../model/books.model');

router.get('/',(req,res)=>{
    res.send("Welcome to our home page");
})

router.post('/books',async(req,res)=>{
    try{
        const book = await Book.create(req.body);
        res.status(200).json(book);
    }
    catch(e){
        res.status(500).json({Error:e.message});
    }
})

router.get('/books',async(req,res)=>{
    try{
        const book = await Book.find();
        res.status(200).json(book)
    }
    catch(e){
        res.status(500).json({Error:e.message});
    }
})

router.get('/books/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const book = await Book.findById(id)
        res.status(200).json(book)
    }
    catch(e){
        res.status(500).json({Error:e.message});
    }
})
router.put('/books/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const book = await Book.findByIdAndUpdate(id);
        res.status(200).json(book)
    }
    catch(e){
        res.status(500).json({Error:e.message});
    }
})
router.delete('/books/:id',async(req,res)=>{
    try{
        const {id} = req.params
        const book = await Book.findByIdAndDelete(id)
        res.status(200).json("Deleted successfully")
    }
    catch(e){
        res.status(500).json({Error:e.message})
    }
})


module.exports = router;
