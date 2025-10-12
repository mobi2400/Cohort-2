# TypeScript
- It compiles down to javaScript.
- It is a superset of JavaScript.
- TypeScript adds static typing to JavaScript.
- TS never runs on the browser, it is always compiled to JS.
- doesnt check the logic

### how to install TypeScript?
- `npm install -g typescript`
- `npx init --init` to create a tsconfig.json file.
- `tsc --version` to check the version of TypeScript installed.
- `tsc -b` to build the project using the tsconfig.json file.
- `tsc filename.ts` to compile a single TypeScript file to JavaScript.
- you have to run js file using node command like `node filename.js`.
- `tsc -w` to watch for changes in the TypeScript files and automatically compile them to JavaScript.

### Important Points
- ts file should be inside src folder
- output js file will be inside dist folder
## Basic Typescript Syntax
- `let` and `const` are used to declare variables.
- `:` is used to specify the type of a variable.
- `?` is used to specify that a variable is optional.
- `!` is used to specify that a variable is not null or undefined.
```typescript
let age: number = 25; // age is a number
const name: string = "John"; // name is a string
let isStudent: boolean = true; // isStudent is a boolean
let hobbies: string[] = ["reading", "traveling"]; // hobbies is an array of strings
let person: { name: string; age: number } = { name: "John", age: 25 }; // person is an object with name and age properties
let optionalVar?: string; // optionalVar is an optional string
let notNullVar: string | null = null; // notNullVar is a string or null
```
```typescript
function add(a: number, b: number): number// data type of the return 
// generally return type is optional, TS can infer it.
{return a + b;}
```
#### assign data type to function which take input another function
```typescript
function add(a: number, b: number): number {
    return a + b;
}
function operate(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}
const result = operate(5, 3, add); // result is 8
```
- ```operation: (x: number, y: number) => number)``` means that operation is a function that takes two numbers and returns a number
- `void` is used to specify that a function does not return a value.
#### Interface
- Interface is a way to define the structure of an object.
- helps you to use custom types in your code multiple times.
- helps in DRY (Don't Repeat Yourself) principle.
```typescript
interface Person {
    name: string;
    age: number;
    email?: string; // email is an optional property
    greet(): void; // greet is a method that does not return a value
}
const person: Person = {
    name: "John",
    age: 25,
    greet() {
        console.log("Hello, my name is " + this.name);
    }   
}
```
### Types
- `type` is used to define a custom type.
- `interface` is used to define the structure of an object.
- `enum` is used to define a set of named constants.
```typescript
type ID = string | number; // ID can be a string or a number
```
```typescript
type Employee = {
    id: ID;
    name: string;
    age: number;
    email?: string; // email is an optional property
    greet(): void; // greet is a method that does not return a value
}
type Manager ={
    name: string;
    department: string;
}
type ManagementEmployee = Employee & Manager; // ManagementEmployee has properties of both Employee and Manager
const emp: ManagementEmployee = {
    id: 1,
    name: "Alice",
    age: 30,
    department: "HR",
    greet() {
        console.log("Hello, my name is " + this.name);
    }
}
```
### Arrays
- Arrays can be defined using two ways.
```typescript
let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
let strings: Array<string> = ["a", "b", "c"]; // array of strings
```