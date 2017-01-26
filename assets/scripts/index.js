'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const userEvents = require('./Auth/events');

// On Document ready
$(() => {
  $('#user-destroy').on('submit', userEvents.onDeleteUser);
  $('#edit-user').on('submit', userEvents.onPatchUser);
  $('#add-user').on('submit', userEvents.onPostUser);
});

// -----------------------------------------------------------------------------



// GAME ENGINE

// COMMIT!

$(document).ready(function() {
const gameBoard = function () {
// first turn starts at 0
let turn = 0;
// first turn is an X
let symbol = 'X';
// All circles blank
$('.circles').html='';

// -----------------------------------------------------------------------------

// isGameOver method
function isGameOver(){
  // 3 X's in a row.
  if ((($('#TL') === 'X') && ($('#TC') === 'X') && ($('#TR') === 'X')) ||
      (($('#ML') === 'X') && ($('#MC') === 'X') && ($('#MR') === 'X')) ||
      (($('#BL') === 'X') && ($('#BC') === 'X') && ($('#BR') === 'X')) ||
      (($('#TL') === 'X') && ($('#MC') === 'X') && ($('#BR') === 'X')) ||
      (($('#BL') === 'X') && ($('#MC') === 'X') && ($('#TR') === 'X'))) {
        $(".messageX").show();
        setTimeout(function() { $(".messageX").hide(); }, 5000);
      } else if
    // 3 O's in a row.
     ((($('#TL') === 'O') && ($('#TC') === 'O') && ($('#TR') === 'O')) ||
      (($('#ML') === 'O') && ($('#MC') === 'O') && ($('#MR') === 'O')) ||
      (($('#BL') === 'O') && ($('#BC') === 'O') && ($('#BR') === 'O')) ||
      (($('#TL') === 'O') && ($('#MC') === 'O') && ($('#BR') === 'O')) ||
      (($('#BL') === 'O') && ($('#MC') === 'O') && ($('#TR') === 'O'))) {
        $(".messageO").show();
        setTimeout(function() { $(".messageO").hide(); }, 5000);
      }
     else if (turn === 8) {
        // none of the above plus board full (if one of the above is valid, does the method stop there? need to include if turn is 8?)
        $(".messageTie").show();
        setTimeout(function() { $(".messageTie").hide(); }, 5000);
        // http://stackoverflow.com/questions/3428766/jquery-show-for-5-seconds-then-hide
      }
    } // need to create 3 messages

// -----------------------------------------------------------------------------


// addSymbol method:
$('.circle').click(function(){
  if ($(this).html()==='') {
    if (turn%2===0) {
      // if it's divisable then it's got to be the first player who is X
      $(this).html('X');
    } else {
      // if it's NOT divisable then it's got to be the second player who is O
      $(this).html('O');
    }
    // When clicked, THAT button is deactivated. (So as to NOT be clicked again to be O or X again)
    // and will in turn will make the game not be playable once it's over.
    $('this').prop('disabled', true);
    //check to see if winner or tie
    isGameOver();
    // add turn for next player
    turn++;
    }
  });

  // -----------------------------------------------------------------------------


// restart clicked
// IF .restart is clicked, run gameBoard function?.
  $('.restart').on('click', function() {
    // need to check this.
    gameBoard();
  });

};
});

// -----------------------------------------------------------------------------


//Create new games on the server. (CREATE)      ?
//Update a game by storing new moves. (UPDATE)  ?


//Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
//must keep COUNT of wins by USERS to be assigned to them.
// The api assigns the player who creates the game as player_x?


// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
