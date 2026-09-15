import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (input1: string) => {
    rl.question("Enter second number: ", (input2: string) => {
        rl.question("Enter third number: ", (input3: string) => {
            let a = Number(input1);
            let b = Number(input2);
            let c = Number(input3);
            let largest: number;

            if (a >= b && a >= c) {
                largest = a;
            } else if (b >= a && b >= c) {
                largest = b;
            } else {
                largest = c;
            }

            console.log("First number: " + a);
            console.log("Second number: " + b);
            console.log("Third number: " + c);
            console.log("Largest number: " + largest);

            rl.close();
        });
    });
});
