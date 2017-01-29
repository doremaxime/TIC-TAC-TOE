'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const gameEngine = require('./gameEngine');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');

// On Document ready
$(() => {
  authEvents.addHandlers();
  $('#user-destroy').on('submit', authEvents.onDeleteUser);
  $('#edit-user').on('submit', authEvents.onPatchUser);
  $('#add-user').on('submit', authEvents.onPostUser);
  $('#TL').on('click', gameEngine.setToken(0));
  $('#TC').on('click', gameEngine.setToken(1));
  $('#TR').on('click', gameEngine.setToken(2));
  $('#ML').on('click', gameEngine.setToken(3));
  $('#MC').on('click', gameEngine.setToken(4));
  $('#MR').on('click', gameEngine.setToken(5));
  $('#BL').on('click', gameEngine.setToken(6));
  $('#BC').on('click', gameEngine.setToken(7));
  $('#BR').on('click', gameEngine.setToken(8));
  $('.restart').on('click', gameEngine.restart);
  $('.showInfo').on('click', gameEngine.showInfo);
});
