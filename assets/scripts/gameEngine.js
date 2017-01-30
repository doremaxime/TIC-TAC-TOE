'use strict';

// 3rd game engine

// Make a new 9-element array and set every element to an empty string.
let gameBoard = ['', '', '', '', '', '', '', '', ''];

let count = 0;
let user = 'x';

// need to know when the game is over for APIs!
let isGameOver = false;

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
    isGameOver = true;
  } else if ((gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
             (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
             (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
             (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
             (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
             (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') ||
             (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
             (gameBoard[2] === 'o' && gameBoard[4] === 'o' && gameBoard[6] === 'o')) {
    $('.message').text('O won!');
    isGameOver = true;
  } else if (checkEachIndex() === true) {
    console.log('tie');
    $('.message').text("It's a tie");
    isGameOver = true;
    //return;    do i need that?
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
// up-dates the gameBoard(logic) and gameboard(html tag)
const upDateBoards = function (event) {

  //adds the user token to the id only if it is empty.
  if ($(event.target.id).text() === '') {
    $(this).text(user);

    //$(this).off();
    gameBoard[parseInt(event.target.id)] = user;
    console.log(gameBoard);
    checkWinner();
    switchUser();
  } else {
    console.log('already taken');
    $('.message').text('already taken');
  }
};

// when reset, all array indexes are back to '' (empty).
function restart() {
  isGameOver = false;
  // $('#0').on();
  // $('#1').on();
  // $('#2').on();
  // $('#3').on();
  // $('#4').on();
  // $('#5').on();
  // $('#6').on();
  // $('#7').on();
  // $('#8').on();

  //$('.circle').on('click');
  $('.circle').text('');

  // $('.message').hide();
  $('.message').text('');
  $('.message').show();
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  user = 'x';
  count = 0;

}

module.exports = {
  upDateBoards,
  restart,
};
