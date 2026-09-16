# Programming Solutions

This folder contains my 9 programming solutions written as part of the programming assignment.

The programs are divided into three languages:

- Java
- TypeScript
- JavaScript

All programs accept dynamic input through the console, function parameters, or constructors. The programs are written to practice basic programming concepts, object-oriented programming, arrays, strings, searching, and asynchronous execution.

## Folder Structure

```text
personal-programming-folder/
│
├── java/
│   ├── TitleCase.java
│   ├── DescendingArray.java
│   └── BankAccount.java
│
├── typescript/
│   ├── reverseArray.ts
│   ├── Student.ts
│   └── longestPalindrome.ts
│
├── javascript/
│   ├── calculateAge.js
│   ├── binarySearch.js
│   └── delayExecution.js
│
├── README.md
└── tsconfig.json


## Java Programs:
1. Convert a sentence string to Title Case (capitalize first letter of each word).  
2. Write a program to sort an array in descending order.  
3. Create a basic encapsulation model for a Bank Account class with deposit/withdraw actions.  

1. Title Case

File: java/TitleCase.java

This program takes a sentence as input and changes the first letter of each word to uppercase.

Example:

Input:
hello world from java

Output:
Hello World From Java

Concepts used:

String handling
Loops
User input
Character conversion


2. Descending Array

File: java/DescendingArray.java

This program takes an array of numbers and arranges the numbers from largest to smallest.

Example:

Input:
4 9 2 7 1

Output:
9 7 4 2 1

Concepts used:

Arrays
Sorting
Loops
User input


3. Bank Account

File: java/BankAccount.java

This program demonstrates a simple bank account using a class. It supports operations such as depositing money, withdrawing money, and checking the balance.

Concepts used:

Classes and objects
Encapsulation
Constructors
Methods
private variables
BigDecimal


**TypeScript Programs:

1. Write a TypeScript program to reverse an array without using reverse().  
2. Create a TypeScript Student class with properties, a constructor, and methods.  
3. Find the longest palindromic substring in a string.  


1. Reverse an Array

File: typescript/reverseArray.ts

This program reverses an array without using the built-in reverse() method.

Example:

Input:
10 20 30

Output:
30 20 10

Concepts used:

Arrays
Loops
Functions
TypeScript types
Generics

2. Student Class

File: typescript/Student.ts

This program creates a Student class containing student information and marks. It provides methods to add marks, calculate the average, and display student details.

Concepts used:

Classes
Constructors
Methods
Arrays
TypeScript access modifiers

3. Longest Palindromic Substring

File: typescript/longestPalindrome.ts

This program finds the longest substring that reads the same from both directions.

Example:

Input:
babad

Output:
bab

Concepts used:

Strings
Loops
Functions
Palindrome checking
Substring handling


JavaScript Programs:
1. Calculate age given a date-of-birth string. 
2. Implement binary search on a sorted array. 
3. Delay function execution for N milliseconds using setTimeout.  


1. Calculate Age

File: javascript/calculateAge.js

This program calculates a person's age using their date of birth.

Example:

Input:
2000-09-07

Output:
26

The program also checks whether the birthday has already occurred in the current year.

Concepts used:

JavaScript Date
Functions
Input validation
Conditional statements


2. Binary Search

File: javascript/binarySearch.js

This program searches for a value in a sorted array using binary search.

Example:

Array:
2 4 8 12 20

Target:
12

Output:
Index: 3

Concepts used:

Arrays
Searching
Loops
Binary search algorithm


3. Delay Function Execution

File: javascript/delayExecution.js

This program delays the execution of a function for a specified amount of time using JavaScript's asynchronous features.

Concepts used:

setTimeout
Functions
Callbacks
Promises
Asynchronous programming
How to Run
Java

Make sure a JDK is installed and configured.

From the project folder:

javac java/TitleCase.java
javac java/DescendingArray.java
javac java/BankAccount.java

Run the programs:

java -cp java TitleCase
java -cp java DescendingArray
java -cp java BankAccount
TypeScript

Install TypeScript if it is not already installed:

npm install --global typescript

Compile the TypeScript files:

tsc -p tsconfig.json

The compiled JavaScript files will be generated in the configured output folder.

Run the required compiled file using Node.js.

JavaScript

Make sure Node.js is installed.

From the project folder:

node javascript/calculateAge.js
node javascript/binarySearch.js
node javascript/delayExecution.js
Input Handling

The programs are designed to work with dynamic inputs rather than fixed values.

Different values can be entered during execution to test the programs.

For example, arrays can contain different numbers, strings can contain different sentences, and the bank account can be tested with different transactions.

Testing

I tested the programs using different types of inputs, including:

Normal inputs
Empty inputs where applicable
Different array sizes
Duplicate values
Negative numbers where applicable
Different strings
Different dates
Valid and invalid transaction amounts
Technologies Used
Java
TypeScript
JavaScript
Node.js
HTML/console input where applicable
Standard language libraries and APIs
Assignment Guidelines

The programs follow the assignment requirements by:

Accepting dynamic inputs
Using meaningful variable and function names
Keeping the code modular
Using functions and classes where appropriate
Maintaining a clear folder structure
Avoiding hardcoded test outputs

All source files are kept inside the designated personal folder.