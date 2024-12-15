// Make sure to include these imports:
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt = "What is FIFA and tell me about it's legacy and about some players in short";


const response = async()=>{
    try{

        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    }catch(err){
        console.log(err);
    }
}

response();