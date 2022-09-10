const max = Math.max(12, 85, 999, 78);
// console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(44);
numbers2.push(88);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [34, 73, ...numbers, 46];

console.log(numbers4);