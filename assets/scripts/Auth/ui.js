'use strict';

const gameEngine = require('../gameEngine');

function shakeForm() {
   let l = 20;
   for( let i = 0; i < 10; i++ )
     $(".modal").animate( {
         'margin-left': "+=" + ( l = -l ) + 'px',
         'margin-right': "-=" + l + 'px'
      }, 50);

};

const success = () => {
};

const signUpSuccess = () => {
  //$('#sign-up').css('display', 'none');
  // $('#sign-up-title').text('Great, now sign-in!');
  shakeForm();
};

const signUpFailure = () => {
  // $('#sign-up-title').text('E-mail already taken or passwords did not match');
  shakeForm();
};

const signInSuccess = () => {
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
  $('.clear-input').val('');
};

const signInFailure = () => {
  // $('#sign-in-title').text('Wrong e-mail or Password');
  shakeForm();
};

const failure = () => {
};

const changePasswordSuccess = () => {
  $('#myModal').modal('hide');
  // $('#change-password-title').text('Change Password!');
  $('.clear-input').val('');
};

const changePasswordFailure = () => {
  // $('#change-password-title').text('Current password is wrong');
  shakeForm();
};

const signOutSuccess = () => {
  $('#myModal').modal('hide');
  $('.gameboard').hide();
  $('.restart').hide();
  $('.show-game-info').hide();
  $('.message').text('Thanks for playing!');
  $('.total-games').hide();
  $('#sign-up').css('display', 'unset');
  $('#sign-in').css('display', 'unset');
  $('#sign-out').css('display', 'none');
  $('#change-password').css('display', 'none');
  $('.clear-input').val('');
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
};
