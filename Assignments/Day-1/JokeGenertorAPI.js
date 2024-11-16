//JOKE GENERATOR WITH JOKE API
const getJoke = ()=>{
    https.get('https://official-joke-api.appspot.com/random_joke'),(resp)=>{
        let data = '';

        resp.on('data',(chunk)=>{
            data += chunk;
        });

        
    }
}