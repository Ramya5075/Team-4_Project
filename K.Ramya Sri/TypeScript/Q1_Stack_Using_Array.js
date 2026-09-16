"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }
    push(value) {
        this.stack.push(value);
        this.top++;
    }
    pop() {
        if (this.top === -1) {
            console.log("Stack is empty");
        }
        else {
            let value = this.stack.pop();
            this.top--;
            console.log("Popped element: " + value);
        }
    }
    display() {
        if (this.top === -1) {
            console.log("Stack is empty");
        }
        else {
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
        }
        else {
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
