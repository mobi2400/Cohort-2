const x: number = 5;
//x = "mobi"; will give you an error
const y: number = 2;
const z: number = x + y;
console.log(z);

function Greet(name: string) {
    console.log("Hello, " + name);
}
Greet("Mobasshir")

function add(a: number, b: number): number// data type of the return 
{
    return a + b;
}
console.log(add(1, 2));
// interface
interface Person {
    name: string;
    age: number,
    email?: string // optional argument
}
const user: Person = {
    name: "Mobasshir",
    age: 20,
}

function isLegal(user: Person) {
    if(user.age>18){
        console.log("legal");
        
    }
    else{
        console.log("not legal");
        
    }
}
