import * as rl from "readline-sync";
async function getData(url:string){
    const res=await fetch(url);
    return res.json();
}
async function main(){
    const u1=rl.question("URL 1: ");
    const u2=rl.question("URL 2: ");
    const u3=rl.question("URL 3: ");
    const results=await Promise.all([getData(u1),getData(u2),getData(u3)]);
    console.log(results);
}
main();