// SImple HTTP Server

const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end("This is MY HTPS server \nusing NODEJS!!");
});

server.listen(1010,()=>{
    console.log('Server is running on http://localhost:1010');
});

