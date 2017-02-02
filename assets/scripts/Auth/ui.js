'use strict';

// TODO: Hide modal when successful sign out and the password was corretcly changed.
// TODO: Show total-games when signing in. hide it when signing out.
// TODO: make .restart create a new game.

const success = () => {
};

const signInSuccess = (response) => {
  console.log(response);
  $('#myModal').modal('hide');
  $('.gameboard').css('visibility', 'visible');
  $('.restart').css('visibility', 'visible');
  $('.total-games').css('visibility', 'visible');
};

const failure = (error) => {
  console.error(error);
};

const changePasswordSuccess = (data) => {
  console.log(data);
  $('#myModal').modal('hide');
};

const signOutSuccess = (data) => {
  console.log(data);
  $('#myModal').modal('hide');
  $('.gameboard').hide();
  $('.restart').hide();
  $('.show-game-info').hide();
  $('.message').text('Thanks for playing!');
  $('.total-games').hide();
};

// <button type="button" class="total-games" id="total-games">games played</button>
module.exports = {
  failure,
  success,
  signOutSuccess,
  signInSuccess,
  changePasswordSuccess,
};
