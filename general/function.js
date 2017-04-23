
// var orderCount = 0;
//
// function takeOrder(topping, crustType) {
//   orderCount = orderCount + 1;
// }
//
// function getSubTotal(itemCount) {
//   return itemCount * 7.5;
// }
//
// function getTax() {
//   return getSubTotal(orderCount) * 0.06;
// }
//
// function getTotal() {
//   return getSubTotal(orderCount) + getTax();
// }
//
// console.log(getSubTotal(orderCount));
// console.log(getTotal());


// Basic miles into km conversion combining functions
function multiplyBySixOne(mile) {
  return mile * 1;
}

function getKilom(mile) {
  return multiplyBySixOne(mile) * 1.61;
}

console.log('The distance covered in Kms is: ' + getKilom(10));

function multiplyByHundred(meter) {
  return meter * 2;
}

function getCms(meter) {
  return multiplyByHundred(meter) * 100;
}

console.log("The distance covered in cms: " + getCms(2));

//////////////////////////////

// Function Expression
var babe = function(model) {
  console.log(model + " is absolutely fine!");
}

babe('Siobhan');

/////////////////////////////

// Function Expression using IF / ELSE
var quarter = function(number) {
    return number / 4;
}

if (quarter(120) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}
