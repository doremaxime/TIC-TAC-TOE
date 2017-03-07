'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const gamesEvents = require('./games/events');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');

// all handlers are ready when document is loaded.
$(() => {
  authEvents.addHandlers();
  gamesEvents.addHandlers();
});
