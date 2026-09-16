import * as readline from "readline";

class Student {
    private id: number;
    private name: string;
    private marks: number;

    constructor(id: number, name: string, marks: number) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    displayDetails(): void {
        console.log("\nStudent Details");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }

    getGrade(): string {
        if (this.marks >= 90) {
            return "A";
        } else if (this.marks >= 75) {
            return "B";
        } else if (this.marks >= 60) {
            return "C";
        } else if (this.marks >= 50) {
            return "D";
        } else {
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

            const student = new Student(
                Number(idInput),
                name,
                Number(marksInput)
            );

            student.displayDetails();
            console.log("Grade:", student.getGrade());

            rl.close();
        });
    });
});