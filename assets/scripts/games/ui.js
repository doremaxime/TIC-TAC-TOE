'use strict';

const success = () => {
  $('#api-message').text('task done');
};

const failure = () => {
  $('#api-message').text('Error');
};

const createSuccess = (data) => {
  $('#api-message').text('New Game Created');
  console.log(data.game);
  $('.show-game-info').text(data.game.cells);
};

const onPatchSuccess = () => {
  $('#api-message').text('Game updated');
};

module.exports = {
  success,
  failure,
  createSuccess,
  onPatchSuccess,
};
