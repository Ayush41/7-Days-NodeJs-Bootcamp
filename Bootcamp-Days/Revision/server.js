const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hellow This is the home Page of nodejs");
});



app.listen(3003);