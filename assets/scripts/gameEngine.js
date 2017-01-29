'use strict';
//const addHandlers = require('./auth/events');

// 3rd game engine

// Make a new 9-element array and set every element to an empty string.
let gameBoard = ['', '', '', '', '', '', '', '', ''];

let count = 0;
let user = 'x';
let numberOfXWins = 0;
let numberOfOWins = 0;
//let circle = $('.circle');

// when reset, all array indexes are back to '' (empty).
function restart() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  $('.circle').text('');
  $('.message').text('');
  count = 0;
  user = 'x';
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
  if ((gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') ||
      (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') ||
      (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') ||
      (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') ||
      (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') ||
      (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') ||
      (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') ||
      (gameBoard[2] === 'x' && gameBoard[4] === 'x' && gameBoard[6] === 'x')) {
    console.log('x wins!');
    $('.message').text('X won!');
    numberOfXWins++;
  } else if ((gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
             (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
             (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
             (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
             (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
             (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') ||
             (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
             (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o')) {
    console.log('o wins!');
    $('.message').text('O won!');
    numberOfOWins++;
  } else if (checkEachIndex() === true) {
    console.log('tie');
    $('.message').text('It is a tie');
  }
}

let switchUser = function () {
  if (user === 'x') {
    user = 'o';
  } else if (user === 'o'){
    user = 'x';
  } else {
    console.log('already taken');
    $('.message').text('already taken');
  }
};

const visualBoard = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] !== '') {
        console.log('already taken');
        $('.message').text('already taken');
    } else if (gameBoard[i] === 'x') {
        $('#' + i).text('x');
        gameBoard[parseInt(event.target.id)] = user;
        switchUser();
    } else if (gameBoard[i] === 'o'){
        $('#' + i).text('o');
        gameBoard[parseInt(event.target.id)] = user;
        switchUser();
    }
  }
};

// inserts token into array.
const setToken = function () {
    console.log(1);
  visualBoard();
    console.log(2);
  checkWinner();
    console.log(3);
    console.log(gameBoard);
};

module.exports = {
  setToken,
  restart,
};

// // inserts token into array.
// const setToken = function () {
//   console.log(1);
//   circle.on('click', function (event) {
//   console.log(2);
//     if ($(event.target).text() === '') {
//       console.log(3);
//       $(event.target).text(user);
//       gameBoard[parseInt(event.target.id)] = user;
//       checkWinner();
//       switchUser();
//       console.log(gameBoard);
//     } else {
//       console.log('already taken');
//       $('.message').text('already taken');
//     }
//   });
// };
