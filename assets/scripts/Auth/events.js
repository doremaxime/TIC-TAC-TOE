'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const getFormFields = require('../../../lib/get-form-fields');

const onPostUser = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.post(data)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};

const onPatchUser = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.patch(data.user.id, data)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
};

const onDeleteUser = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.destroy(data.user.id, data)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError);
};

module.exports = {
  onPostUser,
  onPatchUser,
  onDeleteUser,
};
