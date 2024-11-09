const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("LANDING PAGE");
})

app.get('/login',(req,res)=>{
    res.send("This is login page");
})

app.listen(3003);