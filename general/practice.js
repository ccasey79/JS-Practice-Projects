
console.log('JS Loaded');

var fruits = ['orange', 'apple', 'pear', 'banana'];


// display the array

function displayFruits() {
  console.log('These are my fruits ', fruits);
}

// add another fruits

function addFruits(fruitName) {
  fruits.push(fruitName);
  displayFruits();
}

addFruits('grape');

// reverse array fruits

function reverseFruits() {
  fruits.reverse();
  displayFruits();
}

reverseFruits();
