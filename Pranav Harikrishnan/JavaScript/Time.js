const readlineSync=require("readline-sync");
const durationInput=readlineSync.question("Total Seconds: ");
const duration=parseInt(durationInput, 10);
function updateClock(){
    const now=new Date();
    const hours=String(now.getHours()).padStart(2,"0");
    const minutes=String(now.getMinutes()).padStart(2,"0");
    const seconds=String(now.getSeconds()).padStart(2,"0");
    console.log(`${hours}:${minutes}:${seconds}`);
}
if(isNaN(duration)||duration <= 0){
    console.log("Enter a valid positive number of seconds.");
} else{
    let elapsed=0;
    updateClock();
    const interval=setInterval(() =>{
        updateClock();
        elapsed++;
        if (elapsed>=duration) {
            clearInterval(interval);
            console.log("Clock stopped.");
        }
    }, 1000);
}