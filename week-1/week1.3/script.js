//length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length); // Outputs the length of the string
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target)); // Outputs the index of the target substring
  // str.lastIndexOf(target); // Outputs the last index of the target substring
  // str.includes(target); // Returns true if the target substring is found, false otherwise
}
findIndexOf("Hello World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str); 
  console.log("After substring:", str.substring(start, end)); // Outputs the substring from start to end index
}
getSubstring("Hello World", 0, 5); //  start from 0 till it get 5 characters

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement)); // Replaces the first occurrence of target with replacement
  // str.replaceAll(target, replacement); // Replaces all occurrences of target with replacement
}
replaceString("Hello World", "World", "JavaScript");


// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));// split the string into an array using the separator
}
splitString("Hello World", " ");


// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim()); // Removes leading and trailing whitespace from the string
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase()); // Converts the string to uppercase
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase()); // Converts the string to lowercase
}
toLower("Hello World");
