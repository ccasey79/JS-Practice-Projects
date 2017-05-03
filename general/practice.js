
console.log('JS Loaded');

var cars = ['jaguar', 'ferrari', 'bentley', 'maserati'];

// display this array

function displayCars() {
  console.log('My selection of cars: ', cars);
}

// add a car to he array

function addToCars(newCar) {
  cars.push(newCar);
  displayCars();
}

addToCars('rolls royce');

// sort the order of array list

function sortCarList() {
  cars.sort();
  displayCars();
}

sortCarList();

///////////////////////////

// Build object
