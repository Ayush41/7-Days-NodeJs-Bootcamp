const randomJoke = ()=>{
    const jokes = [
        "Why don't skeletons fight each other? They don't have the guts.",
        "I used to play piano by ear, but now I use my hands.",
        "Why don’t programmers like nature? It has too many bugs.",
        "I told my wife she was drawing her eyebrows too high. She looked surprised."
    ]
    const randomIndex = Math.floor(Math.random()* jokes.length);
    console.log(jokes[randomIndex]);
}
randomJoke();