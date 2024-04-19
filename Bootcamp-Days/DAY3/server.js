const express = require('express'); //using the pkg express by imoprting
const app = express(); //storing express in app

app.get('/',function(req,res){ //get  method is used to get data from server 
    res.send("Welcome the the page! Server started!");
});

app.get('/home',(req,res)=>{

    let jsonfile = {
        name: "John Doe",
        age :25,
        country:"USA"
    }
    res.send(jsonfile);
})

app.get('/search',(req,res)=>{
    res.send("This is  Search Page");
    
})
                     
app.listen(3000,()=>{
    console.log('listening on port 3000');
}); //port where our server will run