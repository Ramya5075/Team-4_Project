let n = parseInt(prompt("Enter number of elements:"));
let arr = [];

for (let i = 0; i < n; i++) {
    let value = parseInt(prompt("Enter element " + (i + 1) + ":"));
    arr.push(value);
}

let maximum = Math.max(...arr);

console.log("Array: " + arr);
console.log("Maximum value: " + maximum);
