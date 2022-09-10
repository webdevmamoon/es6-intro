//object destructuring:
const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'Siler',
    phone: '01798656565',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone } = fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const { age, name } = { name: 'Almas', age: 37, profession: 'car driver' }
console.log(age);

const { price, address } = fish;
console.log(address, price);

// array destructuring:
const [mili, mumu] = [39, 22, 53, 75];
console.log(mili, mumu);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(king);

function getNames() {
    return ['Tia', 'Ox']
}

const [bird, cow] = getNames();
console.log(cow, bird);