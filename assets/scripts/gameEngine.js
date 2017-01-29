'use strict';

// 3rd game engine

// Make a new 9-element array and set every element to an empty string.
let gameBoard = ['', '', '', '', '', '', '', '', ''];

let count = 0;
let user = 'x';
let numberOfXWins = 0;
let numberOfOWins = 0;

// winning combinations
let win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// when reset, all array indexes are back to '' (empty).
function restart() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  $('.circle').text('');
  $('.winMessage').text('');
  count = 0;
  user = 'o';
}

// this function is for use in the checkWinner function.
function checkEachIndex() {
  // check all gameBoard indexes are not empty.
  if ((gameBoard[0], gameBoard[1], gameBoard[2], gameBoard[3], gameBoard[4],
      gameBoard[5], gameBoard[6], gameBoard[7], gameBoard[8]) !== '') {
    return true;
  }
}

// if there are 3 of the same token in a row, then that token wins.
function checkWinner() {

  // if one of these indexes is composed of the same token, then that token wins.
  for (let i = 0; i <= 7; i++) {
    console.log(1);
    if (win[i] === (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') ||
                   (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') ||
                   (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') ||
                   (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') ||
                   (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') ||
                   (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') ||
                   (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') ||
                   (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x')) {
      // console.log('x wins!');
      $('.winMessage').text('X won!');
      numberOfXWins++;
    } else if (win[i] === (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
                   (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
                   (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
                   (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
                   (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
                   (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') ||
                   (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
                   (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o')) {
      console.log('o wins!');
      $('.winMessage').text('O won!');
      numberOfOWins++;
    } else if (checkEachIndex() === true) {
      console.log('tie');
      $('.winMessage').text('It is a tie');
    }
  }
}

// inserts token into array.
const setToken = function (index) {
  if (gameBoard[index] === '') {
    gameBoard[index] = user;
    if (user === 'x') {
      user = 'o';
    } else if (user === 'o') {
      user = 'x';
    } else {
      console.log('already taken');
    }
  }

  checkWinner();
};

module.exports = {
  setToken,
};


// const updateBoard = function () {
//   for (let i = 0; i < gameBoard.length; i++) {
//     if (gameBoard[i] === 'x') {
//       $('#' + i).text('x');
//     } else if (gameBoard[i] === 'o') {
//       $('#' + i).text('o');
//     }
//   }
// };

// document.getElementById("TL").addEventListener("click", function( event ) {
//   // display the current click count inside the clicked div
//   event.target.innerHTML = "hi" + event.detail;
// }, false);

// $("#TL").on('click', function(event){
//   console.log("event is ", event);
// });

// $('.gameboard').on('click', function () {
//   console.log('hi');
// });
//
// $(document).ready(function() {
//   $('.gameboard').on('click', function () {
//     console.log('hi');
//   });
// });
//
// $(document).ready(function() {
//   $('.gameboard').on('click', '.circle', function () {
//     console.log('hi');
//   });
// });
//
// $(document).ready(function() {
//   $('.gameboard').click(function () {
//     console.log('hi');
//   });
// });

// // i want to be able to click on a circle, and have an x or o appear.
//   $('.circle').on('click', function () {
//     if ($(this).html() === '') {
//       if (count%2 === 0) {
//         user = 'x';
//       } else {
//         user = 'o';
//       }
//       $(this).html(user);
//       setToken();
//     }
//   });
//
//
// $(document).ready(function() {
//   const addHandlers = () => {
//     $('.gameboard').click(function () {
//       $('.gameboard').closest('.circle').append(user);
//       setToken();
//     });
//   };
// });

// const addHandlers = () => {
//   $('#TL').on('click', setToken);
//   $('#TC').on('click', setToken);
//   $('#TR').on('click', setToken);
//   $('#ML').on('click', setToken);
//   $('#MC').on('click', setToken);
//   $('#MR').on('click', setToken);
//   $('#BL').on('click', setToken);
//   $('#BC').on('click', setToken);
//   $('#BR').on('click', setToken);
// };

// document.addEventListener("click", function(){
//     document.getElementsByClassNames("circle").innerHTML = "Hello World!";
// });

// original plain js setToken function// inserts token into array.
// const setToken = function (a, b) {
//
//   // a = the index, b = the token we insert.
//   if (gameBoard[a] === '') {
//     gameBoard[a] = b;
//     switchTurn();
//     counter();
//   } else {
//     console.log('already taken');
//   }
//
//   // check for a winner/tie.
//   checkWinner();
//
// };

// let switchUser = function () {
//   if (user = 'o') {
//     user = 'x';
//   } else {
//     user = 'o';
//   }
// }

// // inserts token into array.
// const setToken = function (index) {
//   if ((count % 2 === 0) && (gameBoard[index] === '')) {
//     gameBoard[index] = 'x';
//     count++;
//     user = 'o';
//   } else if ((count % 2 !== 0) && (gameBoard[index] === '')) {
//     gameBoard[index] = 'o';
//     count++;
//     user = 'x';
//   } else {
//     console.log('already taken');
//   }
//
//   checkWinner();
// };

// $('.gameboard').on('click', function () {
//   $(this).closest('.circle').append(user);
//   $(this).click(false);
// });
