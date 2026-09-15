let sentence = prompt("Enter a sentence:");
let words = sentence.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > 0) {
        result = result + word.charAt(0).toUpperCase()
            + word.slice(1) + " ";
    }
}

console.log("Original sentence: " + sentence);
console.log("Capitalized sentence: " + result.trim());
