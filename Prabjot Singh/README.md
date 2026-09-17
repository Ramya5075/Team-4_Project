# 📁 Prabjot Singh — Virtusa Assignment

This folder contains all programming assignments completed by **Prabjot Singh** as part of the Virtusa training program. The tasks are organized by programming language across three separate directories.

---

## 📂 Directory Structure

```
Prabjot Singh/
├── Java/
│   ├── Calculator.java          → Q1: Simple calculator using switch-case
│   ├── RemoveDuplicates.java    → Q2: Remove duplicates using Java Collections (Set)
│   └── FrequentCharacter.java   → Q3: Find most frequent character in a string
│
├── JavaScript/
│   ├── movezeroes.js            → Q1: Move all zeroes to the end of an array
│   ├── methodoverloading.js     → Q2: Method overloading demonstration
│   └── rgbtohexa.js             → Q3: Convert RGB values to Hexadecimal string
│
└── TypeScript/
    ├── palindrome.ts            → Q1: Check if a string is a palindrome
    ├── wordfrequencies.ts       → Q2: Count word frequencies using Map
    └── methodoveriding.ts      → Q3: Method overriding using inheritance
```

---

## ☕ Java

### Q1 — Simple Calculator (`Calculator.java`)

**Task:** Implement a simple calculator program using `switch-case` statements.

**Approach:**
- Takes two numbers and an operator as user input via `Scanner`
- Uses a `switch` statement on the operator character (`+`, `-`, `*`, `/`)
- Handles division-by-zero gracefully with a guard condition
- Prints the result or an error message for invalid operators

**Key Concepts:** `Scanner`, `switch-case`, user input handling, arithmetic operations

**Sample Output:**
```
Enter first number: 10
Enter second number: 5
Enter operator (+, -, *, /): *
Result = 50.0
```

---

### Q2 — Remove Duplicates (`RemoveDuplicates.java`)

**Task:** Remove duplicates from an array using the Java Collections Framework (`Set`).

**Approach:**
- Defines an integer array with repeated values
- Converts the array to a `LinkedHashSet` which automatically removes duplicates while **preserving insertion order**
- Prints the resulting unique elements

**Key Concepts:** `LinkedHashSet`, `Arrays.asList()`, Java Collections Framework

**Sample Output:**
```
Array after removing duplicates:
[10, 20, 30, 40]
```

---

### Q3 — Most Frequent Character (`FrequentCharacter.java`)

**Task:** Write a program to find the most frequent character in a string.

**Approach:**
- Iterates over every character in the input string `"programming"`
- Uses a `HashMap<Character, Integer>` to store the count of each character
- Uses `getOrDefault()` to cleanly handle first-time character encounters
- Iterates over the map entries to find the character with the highest frequency

**Key Concepts:** `HashMap`, `Map.Entry`, `getOrDefault()`, character frequency counting

**Sample Output:**
```
Most frequent character: g
Frequency: 2
```

---

## 🟨 JavaScript

### Q1 — Move Zeroes (`movezeroes.js`)

**Task:** Write a program to move all zeroes to the end of an array while maintaining the order of non-zero elements.

**Approach:**
- Filters all non-zero elements into a new array using a `for...of` loop
- Appends zeroes at the end using a `while` loop until the new array matches the original length
- Input: `[0, 1, 0, 3, 12]`

**Key Concepts:** Array manipulation, `for...of`, `while` loop

**Sample Output:**
```
[1, 3, 12, 0, 0]
```

---

### Q2 — Method Overloading (`methodoverloading.js`)

**Task:** Create a JavaScript program demonstrating method overloading.

**Approach:**
- Since JavaScript does not natively support method overloading, it is simulated using optional parameters and `undefined` checks
- A `Calculator` class has an `add()` method that accepts either 2 or 3 arguments
- If the third argument is present, it adds all three; otherwise it adds two

**Key Concepts:** Classes, optional parameters, simulated overloading, `undefined` check

**Sample Output:**
```
30
60
```

---

### Q3 — RGB to Hexadecimal (`rgbtohexa.js`)

**Task:** Convert RGB color values to a Hexadecimal string.

**Approach:**
- Defines a function `rgbToHex(r, g, b)` that converts each channel (R, G, B) individually
- Uses `Number.toString(16)` to convert decimal to hex
- Uses `padStart(2, "0")` to ensure each channel is always 2 digits (e.g., `9` → `09`)
- Concatenates the results with a `#` prefix
- Input tested: `rgbToHex(255, 99, 71)`

**Key Concepts:** `toString(16)`, `padStart()`, string concatenation, hex color encoding

**Sample Output:**
```
#ff6347
```

---

## 🔷 TypeScript

### Q1 — Palindrome Check (`palindrome.ts`)

**Task:** Write a TypeScript program to check whether a string is a palindrome.

**Approach:**
- Defines a typed function `isPalindrome(str: string): boolean`
- Reverses the string by splitting into characters, reversing the array, and joining back
- Compares the original and reversed strings for equality
- Tests with the input `"madam"`

**Key Concepts:** TypeScript type annotations, `split()`, `reverse()`, `join()`, boolean return types

**Sample Output:**
```
Palindrome
```

---

### Q2 — Word Frequencies (`wordfrequencies.ts`)

**Task:** Use `Map` to count word frequencies in a paragraph.

**Approach:**
- Defines a sample paragraph string with repeated words
- Splits the paragraph into individual words by space
- Uses a `Map<string, number>` to track how many times each word appears
- Uses `map.get(word) || 0` to safely handle first occurrences

**Key Concepts:** TypeScript generics, `Map<K, V>`, string splitting, word frequency counting

**Sample Output:**
```
Map(3) { 'hello' => 3, 'world' => 2, 'typescript' => 1 }
```

---

### Q3 — Method Overriding (`methodoveriding.ts`)

**Task:** Demonstrate method overriding using inheritance in TypeScript.

**Approach:**
- Defines a base class `Animal` with a `sound()` method
- Creates a subclass `Dog` that `extends Animal` and **overrides** the `sound()` method
- Demonstrates polymorphism: a variable typed as `Animal` holds a `Dog` instance, but calls `Dog`'s overridden method at runtime

**Key Concepts:** TypeScript classes, `extends`, method overriding, polymorphism, runtime dispatch

**Sample Output:**
```
Dog barks
```

---

## 🛠️ Technologies Used

| Language   | Version | Files |
|------------|---------|-------|
| Java       | JDK 17+ | `Calculator.java`, `RemoveDuplicates.java`, `FrequentCharacter.java` |
| JavaScript | ES6+    | `movezeroes.js`, `methodoverloading.js`, `rgbtohexa.js` |
| TypeScript | 5.x     | `palindrome.ts`, `wordfrequencies.ts`, `methodoveriding.ts` |

---

## ▶️ How to Run

### Java
```bash
# Compile
javac Calculator.java

# Run
java Calculator
```

### JavaScript
```bash
node movezeroes.js
node methodoverloading.js
node rgbtohexa.js
```

### TypeScript
```bash
# Compile
tsc palindrome.ts

# Run the compiled JS
node palindrome.js
```

---

*Assignment completed by **Prabjot Singh** | Virtusa Training Program*
