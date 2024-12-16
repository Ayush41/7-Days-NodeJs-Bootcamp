const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const express = require('express');
const bodyparser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3030;

const app = express();
app.use(express.json());
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send("WELCOME TO THE PAGE");
});

app.get('/api/text',(req,res)=>{
    res.send("WELCOME TO TEXT PAGE");
});


const prompt = "who is cristiano ronaldo and some of the awards he has got! and about his lecacy so far! explain in breif";

const response = async ()=>{
    try{
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    }catch(err){
        console.log("Error generating content");
    }
};

// response();

app.listen(PORT,()=>{
    console.log("Listening at port 3030}");
});