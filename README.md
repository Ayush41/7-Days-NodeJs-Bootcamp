# 7-Days-NodeJs-Bootcamp
This is my learning from the 7-Day Bootcamp from Hello World Youtube Channel

### Server Creation using Express.js

### Code **`server.js`**: 
```javascript const http = require('http'); 
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => { res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello, World!\n'); });
server.listen(port, hostname, () =>{
 console.log(`Server running at http://${hostname}:${port}/`);
});
```

```
node server.js
nodemon server.js
```
