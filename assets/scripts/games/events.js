'use strict';

const api = require('./api');
const store = require('../store');
const ui = require('./ui');


// These 4 functions activate the web requests in the api file
const onGetIndex = function (event) {
  event.preventDefault();
  api.getIndex()
    .then(ui.success)
    .catch(ui.failure);
};

const onCreateGame = function (event) {
  console.log('events create');
  event.preventDefault();
  api.create()
    .then((response) => {
      store.game = response.game;
      //return store.game;
    })
    .then(ui.createSuccess)
    .catch(ui.failure);
};

// const onGetShow = function (event) {
//   event.preventDefault();
//   let id = parseInt($('#game-id').val());  ///
//   api.show(id)
//     .then(ui.success)
//     .catch(ui.failure);
// };

const totalGames = function (event) {
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
  $('.restart').on('click', onCreateGame);
};

module.exports = {
  addHandlers,
  onCreateGame,
  onGetIndex,
  //onGetShow,
};
