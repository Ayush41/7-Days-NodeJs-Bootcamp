const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to the Hero page");
});

app.get('/menu',(req,res)=>{
    let menulist = {
        name: 'Burger',
        price:10,
        time: 15
    }
    res.send(menulist);
});

app.get('/reviews',(req,res)=>{
    res.send("Review Page");
});

app.post('/orders',(req,res)=>{
    console.log(`User has ordered ${req.body.name}`);
    res.send('Order Placed!');
});


app.listen(3001);