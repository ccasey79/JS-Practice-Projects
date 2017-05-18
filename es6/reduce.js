
// REDUCE EXAMPLE

var primaryColours = [
  { colour: 'red'},
  { colour: 'blue'},
  { colour: 'green'}
];

primaryColours.reduce(function(previous, primaryColour) {
  previous.push(primaryColour.colour);
  	return previous;
}, []);

/// returns - ['red', 'blue', 'green'];
