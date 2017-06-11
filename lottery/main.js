

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

  // if(lottery === 0 < 9 ) {
  //   Math.floor(Math.random() * 9);
  //   numbers[i].style.backgroundColor = 'white';
  // } else if {
  //     (lottery === 10 < 19) {
  //       Math.floor((Math.random() * 11) + 9);
  //         numbers[i].style.backgroundColor = 'blue';
  //   } else if {
  //       (lottery === 20 < 29) {
  //         Math.floor((Math.random() * 21) + 9);
  //           numbers[i].style.backgroundColor = 'pink';
  //   } else if {
  //       (lottery === 30 < 39) {
  //         Math.floor((Math.random() * 31) + 9);
  //           numbers[i].style.backgroundColor = 'green';
  //   } else {
  //       (lottery === 40 < 49) {
  //         Math.floor((Math.random() * 41) + 9);
  //           numbers[i].style.backgroundColor = 'yellow';
  //       }
  //     }
  //   }
  // }

// var whiteColour = [0,1,2,3,4,5,6,7,8,9];
// var blueColour = [10,11,12,13,14,15,16,17,18,19];
// var pinkColour = [20,21,22,23,24,25,26,27,28,29];
// var greenColour = [30,31,32,33,34,35,36,37,38,39];
// var yellowColour = [40,41,42,43,44,45,46,47,48,49];
