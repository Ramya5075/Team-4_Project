import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
    // Convert input into an array of numbers
    const numbers = input.trim().split(/\s+/).map(Number);

    const reversed = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }

    console.log("Original array:", numbers);
    console.log("Reversed array:", reversed);
});