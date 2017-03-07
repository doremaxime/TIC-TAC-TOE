'use strict';

const gameEngine = require('../gameEngine');

// quickly shakes a div left to right when called
function shakeForm() {
   let l = 20;
   for( let i = 0; i < 10; i++ )
     $(".modal").animate( {
         'margin-left': "+=" + ( l = -l ) + 'px',
         'margin-right': "-=" + l + 'px'
      }, 50);

};

// const success = () => {
// };

const signUpSuccess = () => {
  //$('#sign-up').css('display', 'none');

  // clears input fields
  $('.clear-input').val('');

  // Because the user is not automatically signed in when signing up, user is
  // informed that the sign up was successful and should now sign in.
  $('#sign-up-title').text('Great, now sign-in!');
};

const signUpFailure = () => {
  // $('#sign-up-title').text('E-mail already taken or passwords did not match');

  // let's user know that her input was wrong
  shakeForm();
};

const signInSuccess = () => {
  // user exits sign up/in view and is now in game view
  $('#myModal').modal('hide');
  $('.gameboard').show();
  $('.gameboard').css('visibility', 'visible');
  $('.circle').css('visibility', 'visible');
  $('.restart').show();
  $('.restart').css('visibility', 'visible');
  $('.total-games').show();
  $('.total-games').css('visibility', 'visible');
  $('.message').text('');
  $('#sign-up').css('display', 'none');
  $('#sign-in').css('display', 'none');
  $('#sign-out').css('display', 'unset');
  $('#change-password').css('display', 'unset');
  // $('#change-password-title').text('Change Password!');
  gameEngine.onCreateGame();
  // $('#sign-in-title').text('Sign in!');
  // $('#sign-up-title').text('Sign up!');

  // clears input fields
  $('.clear-input').val('');
};

const signInFailure = () => {
  // $('#sign-in-title').text('Wrong e-mail or Password');

  // let's user know that her input was wrong
  shakeForm();
};

// const failure = () => {
// };

const changePasswordSuccess = () => {
  $('#myModal').modal('hide');
  // $('#change-password-title').text('Change Password!');

  // clears input fields
  $('.clear-input').val('');
};

const changePasswordFailure = () => {
  // $('#change-password-title').text('Current password is wrong');

  // let's user know that her input was wrong
  shakeForm();
};

const signOutSuccess = () => {
  // exits game view
  $('#myModal').modal('hide');
  $('.gameboard').hide();
  $('.restart').hide();
  $('.show-game-info').hide();
  $('.total-games').hide();
  $('#sign-up').css('display', 'unset');
  $('#sign-in').css('display', 'unset');
  $('#sign-out').css('display', 'none');
  $('#change-password').css('display', 'none');

  // user is now back to sign up/in view and is thanked for playing.
  $('.message').text('Thanks for playing!');

  // clears input fields
  $('.clear-input').val('');
};

module.exports = {
  // failure,
  // success,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
};
