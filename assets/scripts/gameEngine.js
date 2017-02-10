'use strict';
const api = require('./games/api');
const store = require('./store');
const ui = require('./games/ui');

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
    $('.gameboard').css('display', 'none');
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
    $('.gameboard').css('display', 'none');
  } else if (checkEachIndex() === true) {
    $('.message').text("It's a tie");
    gameOver = true;
    noneWins = true;
    $('.circle').hide();
    $('.gameboard').css('display', 'none');
  }
}

// Alternats user/token every turn.
let switchUser = function () {
  if (user === 'x') {
    user = 'o';
  } else {
    user = 'x';
  }
};

// the user clicks on an ID, and sets off a chain of events that
// updates the gameBoard(logic) and visual gameboard.
const upDateBoards = function (event) {

  // If user had tried to click a taken space, the message will go away this
  // time, provided it's an empty one this time.
  $('.message').text('');

  //adds the user token to the id only if it is empty to the logic and visual board.
  if ($(event.target).text() === '') {

    // shows the token
    $(this).append(user);

    // adds token to array in the index
    gameBoard[parseInt(event.target.id)] = user;

    // updates board to API. ISSUE IS HERE.
    api.update(store.game.id, event.target.id, user, checkWinner()).then(ui.updateSuccess);

    // checks for a winner/tie and if not, then switches the user for the next turn.
    checkWinner();
    switchUser();
  } else {
    $('.message').text('already taken');
  }
};

// resets all variables and visuals.
function restart() {
  $('.circle').text('');
  $('.circle').show();
  $('.message').text('');
  $('.message').show();
  $('#total-games').text('games played');
  $('.gameboard').css('display', 'inherit');
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  user = 'x';
  count = 0;
  xWins = false;
  oWins = false;
  noneWins = false;
  gameOver = false;
}

// creates an ID for every new game to send to API and to be used when updating
// the board to the API.
const onCreateGame = function () { //took out event from parameter

  // commented out below as it raised an error in the browser console.
  // event.preventDefault();

  // resets game.
  restart();

  api.create()
    .then((response) => {
      store.game = response.game;
      return response;
    })
    .then(ui.createSuccess)
    .catch(ui.failure);

};

module.exports = {
  upDateBoards,
  gameOver,
  user,
  onCreateGame,
  restart,
};
