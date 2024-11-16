// Temptrature converter

const convertTemp = (value,scale)=>{
    if(scale == 'C'){
        return(value*9/5)+32; //From C to F
    }else if (scale == 'F') {
        return(value-32)*5/9;        
    }else{
        return 'INvalid';
    }
}
const celcius = 25;
const fahrenheit = 77;

console.log(`${celsius}°C is ${convertTemperature(celsius, 'C')}°F`);
console.log(`${fahrenheit}°F is ${convertTemperature(fahrenheit, 'F')}°C`);