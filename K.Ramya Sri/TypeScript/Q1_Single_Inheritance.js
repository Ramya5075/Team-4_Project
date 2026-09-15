"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayPerson() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}
class Student extends Person {
    constructor(name, age, rollNo, course) {
        super(name, age);
        this.rollNo = rollNo;
        this.course = course;
    }
    displayStudent() {
        console.log("Roll Number: " + this.rollNo);
        console.log("Course: " + this.course);
    }
}
let student = new Student("Ramya", 21, 101, "Computer Science");
student.displayPerson();
student.displayStudent();
