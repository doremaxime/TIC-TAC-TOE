'use strict';

const api = require('./api');
const store = require('../store');
const ui = require('./ui');
const gameEngine = require('../gameEngine');

const onGetIndex = function (event) {

  // stops page from refreshing
  event.preventDefault();
  api.getIndex()
    .then(ui.success)
    .catch(ui.failure);
};

// used for claculating the number of games a user has created
const totalGames = function (event) {

  // stops page from refreshing
  event.preventDefault();
  api.getIndex()
    .then((response) => {
      store.games = response.games;

      // shows the user how many games she has created
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
  onGetIndex,
};
