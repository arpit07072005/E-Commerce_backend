
import express from 'express';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({path: './.env'})

app.listen(process.env.PORT || 3000 ,()=>{
    console.log(`system is running on ${process.env.PORT}`)
})