import * as readlineSync from "readline-sync";
function reverseWords(sentence: string): string {
    return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
const input: string = readlineSync.question("Enter sentence: ");
console.log("Reversed:", reverseWords(input));