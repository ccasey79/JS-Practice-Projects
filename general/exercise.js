

console.log('js loaded!');

var carList = {
  cars: ['bentley', 'ferrari', 'mercedes'],
  displayCars: function() {
    console.log('My personal car collection: ', this.cars);
  },
  addToCars: function(carText) {
    this.cars.push(carText);
    this.displayCars();
  },
  changeCar: function(position, carText) {
    this.cars[position] = carText;
    this.displayCars();
  }
};


var cars = ['mini', 'fiat', 'buick', 'skoda'];

var latestCars = cars.map(function(car) {
  return car;
});

console.log(latestCars);
