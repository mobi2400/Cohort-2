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
### Enums
- Enums are a way to define a set of named constants.
- make constant values more readable.
- used when you have limited set of values to choose from for a variable or function.
```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}
```
- You can access the enum values using the dot notation.
- `console.log(Direction.Up); // 0`
- `console.log(Direction.Down); // 1`
- You can also assign string values to enums.
```typescript
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}
```
- By default, enums are assigned numeric values starting from 0.
```typescript
enum Color {
    Red = 1,
    Green,
    Blue
}
``` 
### Generics
- Generics are a way to create reusable components.
- They allow you to define a component that can work with any data type.
- They provide a way to create components that can work with different data types while still maintaining type safety.
```typescript
// <T> is a placeholder for a data type that will be specified when the function is called.
// arg: T means that arg is of type T.
// The function returns a value of type T.
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("Hello"); // output1 is of type string
let output2 = identity<number>(123); // output2 is of type number
``` 
### Import and Export
- You can use `export` to export variables, functions, classes, interfaces, types, and enums from a module.
- You can use `import` to import variables, functions, classes, interfaces, types, and enums from a module.
```typescript   
// math.ts
export function add(a: number, b: number): number {
    return a + b;
}   
export const PI = 3.14;
```
```typescript
// main.ts
import { add, PI } from "./math";
console.log(add(1, 2)); // 3
console.log(PI); // 3.14
```
# Advance TypeScript Concepts

## Pick
- `Pick` is a utility type that allows you to create a new type by selecting specific properties from an existing type.
```typescript
type Person = {
    name: string;
    age: number;
    email: string;
};
type NameAndAge = Pick<Person, "name" | "age">; // NameAndAge has properties name and age
const person: NameAndAge = {
    name: "John",
    age: 25
};
// email property is not included in NameAndAge type
```
## Partial
- `Partial` is a utility type that allows you to create a new type by making all properties of an existing type optional.
```typescript
type Person = {
    name: string;
    age: number;
    email: string;
};
type PartialPerson = Partial<Person>; // PartialPerson has all properties of Person set to optional
const person: PartialPerson = {
    name: "John"
};
// age and email properties are not included in PartialPerson type
```
## Readonly
- `Readonly` is a utility type that allows you to create a new type by making all properties of an existing type read-only.
```typescript
type Person = {
    name: string;
    age: number;
    email: string;
};
type ReadonlyPerson = Readonly<Person>; // ReadonlyPerson has all properties of Person set to read-only
// or
type ReadonlyPerson = {
    readonly name: string;
    readonly age: number;
    readonly email: string;
}
const person: ReadonlyPerson = {
    name: "John",
    age: 25,
    email: "d9Aq0@example.com"
};
person.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property
```