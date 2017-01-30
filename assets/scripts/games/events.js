'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store.js');
const gameEngine = require('../gameEngine');

const getFormFields = require('../../../lib/get-form-fields');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onDeleteGame = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields (event.target);
  api.destroy(data.game.id, data)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onGetGames = function (event) {
  event.preventDefault();
  let gameId = $('#game-id').val();
  if (gameId.length === 0){
      api.index()
      .then(ui.onSuccess)
      .catch(ui.onError);
  } else {
    api.show(gameId)
      .then(ui.onSuccess)
      .catch(ui.onError);
  }
};

const onPatchGame = function (event) {
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
  console.log(data);
    api.patch(data.game.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onPostGame = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
    api.post(data)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};

const onCreateGame = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.create(data)
  .then((response) => {
    store.game = response.game;
    return store.user;
  })
    .then(ui.onPostSuccess) // double check?
    .catch(ui.failure);
};

const onUpdateGame = function () {
  api.update(store.game.id, event.target.id, gameEngine.user, gameEngine.isGameOver)
    .then(ui.onPatchSuccess)
    .catch(ui.onError)
    ;
};

module.exports = {
  onGetGames,
  onDeleteGame,
  onPatchGame,
  onCreateGame,
  onUpdateGame,
};
