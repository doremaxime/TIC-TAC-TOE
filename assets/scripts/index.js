'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const userEvents = require('./Auth/events');

// On Document ready
$(() => {
  $('#user-destroy').on('submit', userEvents.onDeleteUser);
  $('#edit-user').on('submit', userEvents.onPatchUser);
  $('#add-user').on('submit', userEvents.onPostUser);
});
