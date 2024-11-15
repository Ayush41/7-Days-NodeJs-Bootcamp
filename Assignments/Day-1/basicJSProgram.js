// WORD COUNTER 

const wordCounter = ()=>{
    const text = prompt("Enter a Sentence :-");

    if(!text?.trim()){
        console.log("Please Enter a valid sentence...");
        return;
    }

    //split by spaces and filter out any empty str
    const wordCount = text.trim().split(/\s+/).length;
    console.log(`Word Count is ${wordCount}`);
};

wordCounter();