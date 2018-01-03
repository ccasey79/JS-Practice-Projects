
console.log('JS Loaded!');

const name = "Olivia";
const city = "Los Angeles";
const age = 25;
const profession = "Secretary";

let person;

person = `${name} is ${age}, lives in ${city} and is a bit of an office ${profession} slut!`

document.body.innerHTML = person;


const lad = {
  firstName: 'Bob',
  surname: 'Taylor',
  age: 36,
  email: 'bob@bob.com',
  address: {
    city: 'Boston',
    state: 'MA'
  },
}

let val;

val = lad;

val = lad.firstName;
val = lad.email;

document.body.innerHTML = val;
