'use strict';

const api = require('./api');
const store = require('../store');
const ui = require('./ui');
const gameEngine = require('../gameEngine');

const onGetIndex = function (event) {
  console.log('events getIndex checkpoint');
  event.preventDefault();
  api.getIndex()
    .then(ui.success)
    .catch(ui.failure);
};

// const onCreateGame = function (event) {
//   console.log('events onCreateGame checkpoint');
//   event.preventDefault();
//   api.create()
//     .then((response) => {
//       store.game = response.game;
//       return response;
//     })
//     .then(ui.createSuccess)
//     .catch(ui.failure);
// };

const totalGames = function (event) {
  console.log('events totalGames checkpoint');
  event.preventDefault();
  api.getIndex()
    .then((response) => {
      store.games = response.games;
      $('.total-games').text('Game #' + store.games.length);
      return store.games.length;
    })
    .then(ui.success)
    .catch(ui.failure);
};

const addHandlers = () => {
  $('.total-games').on('click', totalGames);
  $('.restart').on('click', gameEngine.onCreateGame);
};

module.exports = {
  addHandlers,
  //onCreateGame,
  onGetIndex,
};
