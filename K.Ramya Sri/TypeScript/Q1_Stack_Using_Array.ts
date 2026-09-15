import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Stack {
    stack: number[];
    top: number;

    constructor() {
        this.stack = [];
        this.top = -1;
    }

    push(value: number): void {
        this.stack.push(value);
        this.top++;
    }

    pop(): void {
        if (this.top === -1) {
            console.log("Stack is empty");
        } else {
            let value = this.stack.pop();
            this.top--;
            console.log("Popped element: " + value);
        }
    }

    display(): void {
        if (this.top === -1) {
            console.log("Stack is empty");
        } else {
            console.log("Stack elements:");
            for (let i = this.top; i >= 0; i--) {
                console.log(this.stack[i]);
            }
        }
    }
}

const stack = new Stack();

rl.question("Enter number of elements: ", (input) => {
    let n = Number(input);
    let count = 0;

    function getElement() {
        if (count < n) {
            rl.question("Enter element: ", (value) => {
                stack.push(Number(value));
                count++;
                getElement();
            });
        } else {
            stack.display();

            rl.question("Do you want to pop an element? (yes/no): ", (answer) => {
                if (answer.toLowerCase() === "yes") {
                    stack.pop();
                    stack.display();
                }

                rl.close();
            });
        }
    }

    getElement();
});
