
console.log('JS loaded!');

var package = ['orange', 'pear', 'apple', 'grape'];

function displayFruit() {
  console.log('My fruit ', package);
}

function addToFruit(addToFruit) {
  package.push(addToFruit);
  displayFruit();
}

addToFruit('banana');

function changeFruit(position, addToFruit) {
  package[position] = addToFruit;
  displayFruit();
}

changeFruit(0, 'Strawberry')

function deleteFruit(position) {
  debugger;
  package.splice(position, 1);
  displayFruit();
}
