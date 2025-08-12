// solve repetitive tasks 
// callback is a function that is passed as an argument to another function
function square(x) {
  return x * x;
}
function cube(x) {
  return x * x * x;
}
function sumOfAnything(a,b,fn){
    // fn is a callback function
    console.log("Callback Function:", fn);
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;

}
const ans = sumOfAnything(2, 3, square);
console.log(ans); // 13
const ans1 = sumOfAnything(2, 3, cube);
console.log(ans1); // 35
