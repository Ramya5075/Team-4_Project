
const readline = require("readline");
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;
        }

        if (arr[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

// Take input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter sorted numbers separated by spaces: ", function(input) {
    const numbers = input.split(" ").map(Number);

    rl.question("Enter the number you want to search: ", function(targetInput) {

        const target = Number(targetInput);

        const result = binarySearch(numbers, target);

        if (result !== -1) {
            console.log("Number found at index:", result);
        } else {
            console.log("Number not found.");
        }

        rl.close();
    });
});
