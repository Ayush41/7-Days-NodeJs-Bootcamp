require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Load the desired model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "What is FIFA and tell me about its legacy and about some players in short";

const response = async () => {
    try {
        // Create a structured request that might match the API's expected format
        const result = await model.generateContent({
            // Use a more common input structure like `messages` or `text`
            messages: [{ text: prompt }]
        });
        
        // Log the response
        console.log(result.response.text);
    } catch (err) {
        console.log('Error generating content', err);
    }
};

response();


// require('dotenv').config();
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "What is FIFA and tell me about it's legacy and about some players in short";

// const response = async()=>{
//     try{
//         const result = await model.generateContent({prompt});
//         console.log(result.response.text);
//     }catch(err){
//         console.log('Error generating content',err);
//     }
// };

// response();