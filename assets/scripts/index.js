'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const ticTacToe = require('./gameEngine');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');

// On Document ready
$(() => {
  $('#user-destroy').on('submit', authEvents.onDeleteUser);
  $('#edit-user').on('submit', authEvents.onPatchUser);
  $('#add-user').on('submit', authEvents.onPostUser);
});

const addHandlers = () => {
  $('.circle').on('click', function () {
    let message = $('<span>x</span>');
    $(this).append(message);
    $(this).remove();
  });
};
