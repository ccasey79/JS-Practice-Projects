

function lotteryNumbers() {

  var numbers = [];

  for(var i = 0; i < 6; i++) {
    var lottery = Math.floor(Math.random() * 49);

    if(numbers.indexOf(lottery) === -1) {
        numbers.push(lottery);
        document.getElementById("ball" + i).innerHTML = numbers[i];
    } else {
      i--;
    }
  }
}

  if(lottery 0 =< 9 ) {
    Math.floor(Math.random() * 9);
    numbers[i].style.backgroundColor = 'white';
  } else if {
      (lottery 10 =< 19) {
        Math.floor(Math.random() * 11) + 9);
          numbers[i].style.backgroundColor = 'blue';
    } else if {
        (lottery 20 =< 29) {
          Math.floor(Math.random() * 21) + 9);
            numbers[i].style.backgroundColor = 'pink';
    } else if {
        (lottery 30 =< 39) {
          Math.floor(Math.random() * 31) + 9);
            numbers[i].style.backgroundColor = 'green';
    } else {
        (lottery 40 =< 49) {
          Math.floor(Math.random() * 41) + 9);
            numbers[i].style.backgroundColor = 'yellow';
        }
      }
    }
  }
