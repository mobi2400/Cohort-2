// promises are syntactical sugar to make code slightly more readable
// callback func are ugly way to write async func- here promises come in
// it is just a class that makes callbacks and async functions slightly more readable and manageable
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

 readFilePromise()
 // pending is displayed when the promise is still waiting--> its data is not called yet just work is done
    .then(onDone)
// promise is called and data is used
    .catch(err => console.error("Error reading file:", err)); 