
var currentDate = new Date();
console.log(currentDate);

// var myCar = new Object();
//   myCar.maxSpeed = 50;
//   myCar.driver = 'Shaun';
//
//
// console.log(myCar.maxSpeed);


// var myCar = {
//   maxSpeed: 75,
//   driver: 'Shaun',
//   model: 'Skoda'
// };
//
// console.log(myCar.maxSpeed);


/// Constructor function example
// always name Constructor function with a capital

var Car = function(maxSpeed, driver) {

  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.drive = function(speed, time) {
    console.log(speed * time);
  };
  this.logDriver = function() {
    console.log('driver name ' + this.driver);
  };
}

/// Instances
var myCar = new Car(75, 'Fred');
var myCar2 = new Car(90, 'Sid');

/// Call the constructor function
myCar.drive(30,5);
myCar2.logDriver();
