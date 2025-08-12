// Async await is a syntactical sugar built on top of promises
// It allows us to write asynchronous code in a more synchronous fashion
// The 'async' keyword is used to declare an asynchronous function
// The 'await' keyword is used to wait for a promise to resolve
const fs = require('fs');
 function readFilePromise() {
    // returns a promise
    return new Promise((resolve, reject) => {
        fs.readFile('week-1/week1.5/a.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
 }
 function onDone(data) {
    console.log("File content:", data);
 }
 //no callback hell
 async function main() {
    try {
        // await is used to wait for the promise to resolve
        // It pauses the execution of the function until the promise is resolved
        // await gives you the resolve value of the promise
        // and get rid of the need for .then()
        const data = await readFilePromise();
        onDone(data);
    } catch (err) {
        console.error("Error reading file:", err);
    }
 }
 main();
 // callback, promise and async/await are similar in that they all deal with asynchronous operations