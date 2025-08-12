// synchronous function 
// together one after another,sequentially only one thing is happened at a time
// synchronous function is blocking

function synchronousFunction() {
  console.log("Synchronous Function");
}
synchronousFunction();
// asynchronous function
// multiple things can happen at the same time
// happens in parts. Multiple things are context switching with each other
// asynchronous function is non-blocking 
function asynchronousFunction() {
  setTimeout(() => {
    console.log("Asynchronous Function");
  }, 1000);
  console.log("This is logged immediately after the setTimeout call");

}
asynchronousFunction();
// asynchronous file read
const fs = require('fs'); // lib
// utf-8 is a character encoding
fs.readFile('week-1/week1.5/a.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
console.log('hi there'); // this run first because of async nature of file reading
