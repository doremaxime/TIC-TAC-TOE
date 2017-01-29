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
    .then(ui.success)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
  .then((response) => {
    store.user = response.user;
    return store.user;
  })
    .then(ui.success)
    .then(() => {
    console.log(store);
  })
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.success)
    .catch(ui.failure)
    ;
};

// const onCreateGames = function (event) {
//   event.preventDefault();
//
//   let data = getFormFields(event.target);
//
//   api.createGames(data)
//     .then(ui.success)
//     .catch(ui.failure);
// };

const onShowGames = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.showGames(data)
    .then(ui.success)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('.showInfo').on('submit', onShowGames);
  $('#0').on('click', gameEngine.upDateVisualBoard);
  $('#1').on('click', gameEngine.upDateVisualBoard);
  $('#2').on('click', gameEngine.upDateVisualBoard);
  $('#3').on('click', gameEngine.upDateVisualBoard);
  $('#4').on('click', gameEngine.upDateVisualBoard);
  $('#5').on('click', gameEngine.upDateVisualBoard);
  $('#6').on('click', gameEngine.upDateVisualBoard);
  $('#7').on('click', gameEngine.upDateVisualBoard);
  $('#8').on('click', gameEngine.upDateVisualBoard);
  $('.restart').on('click', gameEngine.restart);
  $('.showInfo').on('click', gameEngine.showInfo);
};

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  addHandlers,
  onShowGames,

  // onCreateGames,
};
