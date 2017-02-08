'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const gameEngine = require('../gameEngine');

const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
  .then((response) => {
    store.user = response.user;
    return store.user;
  })
    .then(ui.signInSuccess)
    .catch(ui.signInFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
    ;
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.error)
    ;
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#0').on('click', gameEngine.upDateBoards);
  $('#1').on('click', gameEngine.upDateBoards);
  $('#2').on('click', gameEngine.upDateBoards);
  $('#3').on('click', gameEngine.upDateBoards);
  $('#4').on('click', gameEngine.upDateBoards);
  $('#5').on('click', gameEngine.upDateBoards);
  $('#6').on('click', gameEngine.upDateBoards);
  $('#7').on('click', gameEngine.upDateBoards);
  $('#8').on('click', gameEngine.upDateBoards);
};

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  addHandlers,
};
