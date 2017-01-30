'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store.js');


const getFormFields = require('../../../lib/get-form-fields');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetUsers = function (event) {
  event.preventDefault();
  let userId = $('#user-id').val();

  if (userId.length === 0){
      api.index()
      .then(ui.onSuccess)
      .catch(ui.onError);
  } else {
    api.show(userId)
      .then(ui.onSuccess)
      .catch(ui.onError);
  }

};

const onDeleteUser = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields (event.target);
  api.destroy(data.user.id, data)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onPatchUser = function (event) {
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
  console.log(data);
    api.patch(data.user.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onPostUser = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
    api.post(data)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};

const onCreateGames = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.createGames(data)
  .then((response) => {
    store.user = response.user;
    return store.user;
  })
    .then(ui.success)
    .catch(ui.failure);
};

const onShowGames = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.showGames(data)
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure);
};


module.exports = {
  onGetUsers,
  onDeleteUser,
  onPatchUser,
  onPostUser,
  onCreateGames,
  onShowGames
};
