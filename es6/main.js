
window.onload = function() {

// LET WORD EXAMPLE

  var x = 10;

  if (x > 5) {
    let x = 15;
    console.log("Inside the block: " + x);
  }

  console.log("Outside the block: " + x);


// DEFAULT PARAMETERS

  function topNinja(name="Burt", colour="ginger", weapon="snake") {

    console.log(name + " has " + colour +  " hair and he has a deadly " +  weapon);

  }

  topNinja();












}
