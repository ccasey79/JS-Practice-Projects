

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
