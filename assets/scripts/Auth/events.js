'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const getFormFields = require('../../../lib/get-form-fields');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetBooks = function (event) {
  event.preventDefault();
  let bookId = $('#book-id').val();

  if (bookId.length === 0){
      api.index()
      .then(ui.onSuccess)
      .catch(ui.onError);
  } else {
    api.show(bookId)
      .then(ui.onSuccess)
      .catch(ui.onError);
  }

};

const onDeleteBook = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields (event.target);
  api.destroy(data.book.id, data)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

const onPatchBook = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
  console.log(data);
    api.patch(data.book.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onPostBook = function(event){
  event.preventDefault();
  // let bookId = $('#delete-book-id').val();
  // multiple ways to do everything.
  // However prefer this way.

  let data = getFormFields(event.target);
    api.post(data)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};


module.exports = {
  onGetBooks,
  onDeleteBook,
  onPatchBook,
  onPostBook
};
