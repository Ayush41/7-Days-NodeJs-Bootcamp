const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "who is cristiano ronaldo and some of the awards he has got! and about his lecacy so far! explain in breif";

const response = async ()=>{
    try{
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    }catch(err){
        console.log("Error generating content");
    }
};

response();