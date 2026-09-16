class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayPerson(): void {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

class Student extends Person {
    rollNo: number;
    course: string;

    constructor(name: string, age: number, rollNo: number, course: string) {
        super(name, age);
        this.rollNo = rollNo;
        this.course = course;
    }

    displayStudent(): void {
        console.log("Roll Number: " + this.rollNo);
        console.log("Course: " + this.course);
    }
}

let student = new Student("Ramya", 21, 101, "Computer Science");
student.displayPerson();
student.displayStudent();
