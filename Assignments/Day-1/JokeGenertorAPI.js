//JOKE GENERATOR WITH JOKE API

const https = require('https');

function getJoke() {
  https.get('https://official-joke-api.appspot.com/random_joke', (resp) => {
    let data = '';
    
    resp.on('data', (chunk) => {
      data += chunk;
    });
    
    resp.on('end', () => {
      const joke = JSON.parse(data);
      console.log(`${joke.setup} - ${joke.punchline}`);
    });
  }).on('error', (err) => {
    console.log('Error:', err);
  });
}

getJoke();