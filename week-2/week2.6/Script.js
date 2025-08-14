// map, filter and arrow fns

// map()
const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);

// filter
const filteredNumbers = numbers.filter((number) => number % 2 === 0);
console.log(filteredNumbers);