'use strict';

// TODO: Hide modal when successful sign out and the password was corretcly changed.
// TODO: Show total-games when signing in. hide it when signing out.
// TODO: make .restart create a new game.

const success = () => {
};

const signUpSuccess = (response) => {
  console.log(response);
  // $('#sign-up').hide();
  $('#sign-up').css('display', 'none');
};

const signUpFailure = (data) => {
  console.log(data);
  $('#myModal').effect('shake');
};

const signInSuccess = (response) => {
  console.log(response);
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
};

const signInFailure = (response) => {
  console.log(response);
  $('#myModal').effect('shake');
};

const failure = (error) => {
  console.error(error);
};

const changePasswordSuccess = (data) => {
  console.log(data);
  $('#myModal').modal('hide');
};

const changePasswordFailure = (data) => {
  console.log(data);
  $('#myModal').effect('shake');
};

const signOutSuccess = (data) => {
  console.log(data);
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

// <button type="button" class="total-games" id="total-games">games played</button>
module.exports = {
  failure,
  success,
  signOutSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signUpSuccess,
};
