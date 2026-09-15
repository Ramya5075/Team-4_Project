import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of elements: ", (input) => {
    let n = Number(input);
    let numbers: number[] = [];
    let count = 0;
    let sum = 0;

    function getNumbers() {
        if (count < n) {
            rl.question("Enter element: ", (value) => {
                let number = Number(value);
                numbers.push(number);
                sum = sum + number;
                count++;
                getNumbers();
            });
        } else {
            let average = sum / n;
            console.log("Array elements: " + numbers);
            console.log("Sum: " + sum);
            console.log("Average: " + average);
            rl.close();
        }
    }

    getNumbers();
});
