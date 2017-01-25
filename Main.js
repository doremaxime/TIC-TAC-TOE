"use strict";

// COMMIT!

// everything goes in $(document).ready(function() {});
let symbol = 'X';
let turn = 0;

// ----------------------------------------------------------

// let gameBoard = function () {};

// All circles blank.
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
// check memory game: let gameBoard = document.getElementById('game-board');

// ------------------------------------------------------------
// addSymbol method:
// All circles ready to be clicked. (JQuery)
function addSymbol() {
  $('.circle').click(function(){
  if($(this).html()===' '){
    if (turn%2===0) {
      // if it's divisable then it's got to be the first player who is X
      symbol = 'X';
      // can i combine symbol and player?
      user = 'Player 1';
    } else {
      // if it's NOT divisable then it's got to be the second player who is O
      symbol = 'O';
      // can i combine symbol and player?
      player = 'Player 2';
    }
    $(this).html(symbol);
    //check to see if winner/tie
    isGameOver();
    // add turn
    turn++
  }
});
};

// IF a circle is clicked, it changes fom circle to User's symbol using JQuery:
// for X
$( “.circle” ).on('click', 'id', function() {
  if (turn%2===0) {
    let symbol = $( this ).html(‘X’);
  $( this ).text( symbol );
  // IF clicked, THAT button is deactivated. (So as to NOT be clicked again to be O or X again)
  // and will in turn will make the game not be playable once it's over.
  $("this").prop('disabled', true);
} else {
// for O
$( “.circle” ).on('click', 'id', function() {
  let symbol = $( this ).html(‘O’);
  $( this ).text( symbol );
  // IF clicked, THAT button is deactivated. (So as to NOT be clicked again to be O or X again)
  // and will in turn will make the game not be playable once it's over.
  $("this").prop('disabled', true);
});
}
isGameOver();
turn++
});

// ------------------------------------------------------------

// isGameOver method
function isGameOver(){
  // 3 X's in a row.
  if (((TL === 'X') && (TC === 'X') && (TR === 'X')) ||
      ((ML === 'X') && (MC === 'X') && (MR === 'X')) ||
      ((BL === 'X') && (BC === 'X') && (BR === 'X')) ||
      ((TL === 'X') && (MC === 'X') && (BR === 'X')) ||
      ((BL === 'X') && (MC === 'X') && (TR === 'X'))) {
        $(".messageX").show();
        setTimeout(function() { $(".messageX").hide(); }, 5000);
      } else if {
    // 3 O's in a row.
    (((TL === 'O') && (TC === 'O') && (TR === 'O')) ||
      ((ML === 'O') && (MC === 'O') && (MR === 'O')) ||
      ((BL === 'O') && (BC === 'O') && (BR === 'O')) ||
      ((TL === 'O') && (MC === 'O') && (BR === 'O')) ||
      ((BL === 'O') && (MC === 'O') && (TR === 'O'))) {
        $(".messageO").show();
        setTimeout(function() { $(".messageO").hide(); }, 5000);
      }
    } else {
        // none of the above plus board full (if one of the above is valid, does the method stop there? need to include if turn is 8?)
        $(".messageTie").show();
        setTimeout(function() { $(".messageTie").hide(); }, 5000);
        // http://stackoverflow.com/questions/3428766/jquery-show-for-5-seconds-then-hide
      }
    } // need to create 3 messages

// ------------------------------------------------------------

// restart clicked
// IF .restart is clicked, run gameBoard function?.
  $('.restart').on('click', function() {
    // need to check this.
    turn = 0;
    player = 'X';
    gameBoard();
  });


//Create new games on the server. (CREATE)      ?
//Update a game by storing new moves. (UPDATE)  ?


//Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
//must keep COUNT of wins by USERS to be assigned to them.
// The api assigns the player who creates the game as player_x?


// ------------------------------------------------------------

// User constructor function
const User = function (email, password, gamesWon) {
  this.email = email;
  this.password = password;
  this.gamesWon = gamesWon;
};
User.prototype.unmask = function () {
  return this.email + 'has won' + this.gamesWon + 'games!';
};
module.exports = User;

// ------------------------------------------------------------
