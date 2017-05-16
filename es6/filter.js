
//// CLASSIC FOR LOOP - SELECTING PARTICULAR DATA
/// returning fruit products

var products = [{name: 'cucumber', type: 'vegetable'},
                {name: 'orange', type: 'fruit'},
                {name: 'celery', type: 'vegetable'},
                {name: 'pear', type: 'fruit'}
];

var filteredProducts = [];

for (var i = 0; i < products.length; i ++ ) {
 	if (products[i].type === 'fruit') {
  filteredProducts.push(products[i]);
 }
}

filteredProducts;

//// AS A FILTERED HELPER
/// With filter - it filters data on an existing array.

products.filter(function(product) {
  return product.type === 'fruit';
});

///// ANOTHER FILTER ARRAY EXAMPLE

var products = [{name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
                {name: 'orange', type: 'fruit', quantity: 10, price: 15},
                {name: 'celery', type: 'vegetable', quantity: 30, price: 9},
                {name: 'pear', type: 'fruit', quantity: 3, price: 5}
];


// type is vegetable, quantity is greater than 0, price is less than 10


products.filter(function(product) {
  return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});
