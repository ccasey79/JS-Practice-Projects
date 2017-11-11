console.log('JS Loaded!');

// Variable contains the element
var itemInput = document.querySelector('input[type="text"]');


// Add an Event Listener to that getElementById
itemInput.addEventListener('keydown', eventRun);

// Function which carries out the event when the event action take place
function eventRun(e) {
  document.getElementById('box').innerHTML = '<h3>'+e.target.value+'</h3>'
  document.getElementById('box').style.backgroundColor = "yellow";
}
