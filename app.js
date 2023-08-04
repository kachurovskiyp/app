const fs = require('fs');

const people = [];

const genders = ['M','F'];
const maleNames = ['Liam', 'Noah', 'Oliver', 'James', 'Elijah', 'William', 'Henry', 'Lucas', 'Benjamin', 'Theodore'];
const femaleNames = ['Olivia', 'Emma', 'Charlotte', 'Amelia', 'Sophia', 'Isabella', 'Ava', 'Mia', 'Evelyn', 'Luna', 'Harper'];
const lastNames = ['Solace', 'Levine', 'Thatcher', 'Raven', 'Bardot', 'Jameson', 'Hansley', 'Cromwell', 'Ashley'];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

for (let step = 0; step < 20; step++) {
  const gender = randChoice(genders);
  const person = {};

  person.gender = gender;
  person.lastName = randChoice(lastNames);
  person.firstName = randChoice(gender === 'M' ? maleNames : femaleNames);
  person.age = Math.floor(Math.random() * 78);

  if(person.age < 18) person.age = 18;

  people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});