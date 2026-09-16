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
class Student {
    id;
    name;
    marks;
    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    displayDetails() {
        console.log("\nStudent Details");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
    getGrade() {
        if (this.marks >= 90) {
            return "A";
        }
        else if (this.marks >= 75) {
            return "B";
        }
        else if (this.marks >= 60) {
            return "C";
        }
        else if (this.marks >= 50) {
            return "D";
        }
        else {
            return "F";
        }
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter student ID: ", (idInput) => {
    rl.question("Enter student name: ", (name) => {
        rl.question("Enter marks: ", (marksInput) => {
            const student = new Student(Number(idInput), name, Number(marksInput));
            student.displayDetails();
            console.log("Grade:", student.getGrade());
            rl.close();
        });
    });
});
