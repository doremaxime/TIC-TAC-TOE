'use strict';

const success = () => {
};

const signUpSuccess = () => {
  $('#sign-up').css('display', 'none');

  // in case the user failed to sign-up before, this return his successful entry to 'Sign up!'
  $('#sign-up-title').text('Sign up!');
};

const signUpFailure = () => {
  $('#sign-up-title').append(" Oh boy, either those didn't match, or it's already taken, try again...");
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

  // in case the user failed to sign-in before, this return his successful entry to 'Sign in!'
  $('#sign-in-title').text('Sign in!');
};

const signInFailure = () => {
  $('#sign-in-title').append(" Oh boy, those didn't match our records, try again...");
};

const failure = () => {
};

const changePasswordSuccess = () => {
  $('#myModal').modal('hide');

  // in case the user failed to change password before, this return his successful entry to 'Change Password!'
  $('#change-password-title').text('Change Password!');
};

const changePasswordFailure = () => {
  $('#change-password-title').append(" Whoops, hmm... try that again...");
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
