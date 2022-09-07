// breakup with var
// no more use of var 
// let: let it to reassign
// const: do not allow it to reassign

let money = 50;
money = 60;
console.log(money);

const bird = 'jan pakhi';
// bird = 'tiya pakhi';
const message = bird + ' kiak kiak';
console.log(message);

const numbers = [12, 89, 65, 45];
// reassign not allowed to const
// numbers = [77, 66, 55, 22, 99];
numbers.push(34);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'Rongpur'
}
// student = { name: 'Mofazzol' }
student.name = 'Mofazzol';
console.log(student);

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}