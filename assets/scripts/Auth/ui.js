'use strict';

const success = () => {
};

const signUpSuccess = (response) => {
  console.log(response);
  // $('#sign-up').hide();
  $('#sign-up').css('display', 'none');
};

const signUpFailure = (data) => {
  console.log(data);
  $('#sign-up-title').append("Oh boy, either those didn't match, or it's already taken, try again...");
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
  $('#sign-in-title').append("Oh boy, either those didn't match, try again...");
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
  $('#change-password-title').append("Whoops, those didn't match!");
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
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
};
