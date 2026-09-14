const readlineSync=require("readline-sync");
function getRandomInt(min, max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
}
const min=parseInt(readlineSync.question("Enter minimum value: "),10);
const max=parseInt(readlineSync.question("Enter maximum value: "),10);
if(isNaN(min)||isNaN(max)||min>max){
    console.log("Please enter a valid range (min should be <= max).");
} else{
    console.log(`Random number between ${min} and ${max}:`,getRandomInt(min, max));
}