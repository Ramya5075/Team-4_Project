const readlineSync=require("readline-sync");
function secondSmallest(arr){
    const unique=[...new Set(arr)];
    if (unique.length<2){
        return null;
    }
    unique.sort((a,b) => a-b);
    return unique[1];
}
const input=readlineSync.question("Enter numbers separated by spaces: ");
const numbers=input.trim().split(/\s+/).map(Number);
const result=secondSmallest(numbers);
console.log(result!==null?`Second smallest: ${result}`:"Not enough distinct elements.");