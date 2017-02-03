'use strict';

// 3rd game engine

// Make a new 9-element array and set every element to an empty string.
let gameBoard = ['', '', '', '', '', '', '', '', ''];

let count = 0;
let user = 'x';
let xWins = false;
let oWins = false;
let noneWins = false;
let gameOver = false;

// this function is for use in the checkWinner function to see if all indexes are not empty.
function checkEachIndex() {
  return gameBoard.every((e) => e !== '');
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
    $('.message').text('X won!');
    gameOver = true;
    xWins = true;
    $('.circle').hide();
  } else if ((gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
             (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
             (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
             (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
             (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
             (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') ||
             (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
             (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o')) {
    $('.message').text('O won!');
    gameOver = true;
    oWins = true;
    $('.circle').hide();
  } else if (checkEachIndex() === true) {
    $('.message').text("It's a tie");
    gameOver = true;
    noneWins = true;
    $('.circle').hide();
  }
}

let switchUser = function () {
  if (user === 'x') {
    user = 'o';
  } else {
    user = 'x';
  }
};

// the user clicks on an ID, and sets off a chain of events that
// updates the gameBoard(logic) and gameboard(html tag)
const upDateBoards = function (event) {
  $('.message').text('');

  //adds the user token to the id only if it is empty.

  if ($(event.target).text() === '') {
    $(this).append(user);
    gameBoard[parseInt(event.target.id)] = user;
    checkWinner();
    switchUser();
  } else {
    $('.message').text('already taken');
  }
};

function restart() {
  $('.circle').text('');
  $('.circle').show();
  $('.message').text('');
  $('.message').show();
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  user = 'x';
  count = 0;
  xWins = false;
  oWins = false;
  noneWins = false;
  gameOver = false;
}

module.exports = {
  upDateBoards,
  restart,
  gameOver,
  user,
};
