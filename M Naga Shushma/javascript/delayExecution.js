const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to delay another function
function delayExecution(callback, milliseconds) {
    setTimeout(callback, milliseconds);
}

rl.question("Enter delay time in milliseconds: ", function(input) {

    const milliseconds = Number(input);

    console.log("Waiting...");

    delayExecution(function() {
        console.log("Hello! The delay is complete.");
        rl.close();
    }, milliseconds);
});
