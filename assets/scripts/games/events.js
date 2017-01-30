'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');

const getFormFields = require('../../../lib/get-form-fields');

const onGetGames = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  if (data.game.id.length === 0) {    // check
    api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError);
  } else {
    api.show(data.game.id)
    .then(ui.onGetSuccess)
    .catch(ui.onError);
  }
};

const onCreateGame = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.create(data)
    .then((response) => {
      store.game = response.game;
      return store.game;
    })
    .then(ui.onCreateSuccess)
    .catch(ui.onError);
};

const onUpdateGame = function () {  // don't we pass a whole bunch of stuff here
  event.preventDefault();

  api.update(store.game.id, event.target.id, player, gameOver)
    .then(ui.onPatchSuccess)
    .catch(ui.onError)
    ;
};

const addHandlers = () => {
  $('#show-game-info').on('submit', onGetGames);
};

module.exports = {
  onGetGames,
  onCreateGame,
  onUpdateGame,
  addHandlers,
};
