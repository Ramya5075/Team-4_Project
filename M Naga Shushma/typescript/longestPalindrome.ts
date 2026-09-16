import * as readline from "readline";

function longestPalindrome(text: string): string {
    let longest = "";

    for (let start = 0; start < text.length; start++) {
        for (let end = start; end < text.length; end++) {

            let word = text.substring(start, end + 1);
            let reversed = "";

            for (let i = word.length - 1; i >= 0; i--) {
                reversed = reversed + word[i];
            }

            if (word === reversed && word.length > longest.length) {
                longest = word;
            }
        }
    }

    return longest;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input: string) => {
    const result = longestPalindrome(input);

    console.log("Longest palindromic substring:", result);

    rl.close();
});