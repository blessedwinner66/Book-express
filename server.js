const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require('./route/index.router');

app.use(express.json());

app.use('/api',route);


mongoose.connect("mongodb://localhost:27017/Books").then(()=>{console.log("Database connected")}).catch((e)=>({Error:e.message}));

app.listen(3000,()=>{
    console.log("server listening at port 3000...")
})