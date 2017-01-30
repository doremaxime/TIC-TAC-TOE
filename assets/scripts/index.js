'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');
const userEvents = require('./users/events');

// On Document ready
$(() => {
  authEvents.addHandlers();
  $('#user-search').on('submit', userEvents.onGetUsers);
  $('#user-destroy').on('submit',userEvents.onDeleteUsers);
  $('#edit-user').on('submit', userEvents.onPatchUsers);
  $('#add-user').on('submit', userEvents.onPostUsers);
});
